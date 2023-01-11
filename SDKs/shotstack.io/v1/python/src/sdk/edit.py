import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Edit:
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

    
    def get_render(self, request: operations.GetRenderRequest) -> operations.GetRenderResponse:
        r"""Get Render Status
        Get the rendering status, temporary asset url and details of a render by ID.
        
        **base URL:** https://api.shotstack.io/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/render/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RenderResponse])
                res.render_response = out

        return res

    
    def post_render(self, request: operations.PostRenderRequest) -> operations.PostRenderResponse:
        r"""Render Asset
        Queue and render the contents of a timeline as a video, image or audio file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/render"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueuedResponse])
                res.queued_response = out

        return res

    