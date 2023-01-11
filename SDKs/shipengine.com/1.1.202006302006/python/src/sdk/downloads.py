import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Downloads:
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

    
    def download_file(self, request: operations.DownloadFileRequest) -> operations.DownloadFileResponse:
        r"""Download File
        Get File
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/downloads/{dir}/{subdir}/{filename}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.download_file_pdf_response_body = r.content
            if utils.match_content_type(content_type, "application/zpl"):
                res.download_file_zpl_response_body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.download_file_png_response_body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    