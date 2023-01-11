import requests
from sdk.models import operations
from . import utils

class ImprovementProgram:
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

    
    def post_improve(self, request: operations.PostImproveRequest) -> operations.PostImproveResponse:
        r"""Submit an image to the remove.bg Improvement program
        * Contribute an image that remove.bg is currently not able to remove the background from properly
        * Help us make remove.bg better
        * Get better results for similiar images in the future
        
        Notes:
          * By submitting images through the API you agree to the <a target=\"_blank\" rel=\"noopener\" href=\"/ipc\">Improvement Program Conditions</a>
          * File size: up to 12MB
          * up to 100 files per day (up to 1000 for Enterprise customers). <br> Higher Rate Limits are available <a href=\"/support/contact?subject=Improvement+Program+Rate+Limit\">upon request</a>.
        
        Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
        
        Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/improve"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostImproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    