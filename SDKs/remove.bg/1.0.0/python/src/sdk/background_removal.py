import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class BackgroundRemoval:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def post_removebg(self, request: operations.PostRemovebgRequest) -> operations.PostRemovebgResponse:
        r"""Remove the background of an image
        Removes the background of a JPG/PNG image.
        
        * File size: up to 12 MB
        * Image source: File upload (binary or as base64 encoded string) or download from URL
        * Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
        * Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)
        
        Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/removebg"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRemovebgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemoveBgJSONResponse])
                res.remove_bg_json_response = out
            if utils.match_content_type(content_type, "image/*"):
                res.post_removebg_200_image_wildcard_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    