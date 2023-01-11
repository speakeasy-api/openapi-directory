import requests
from sdk.models import operations
from . import utils

class FilesUploadFiles:
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

    
    def get_files(self, request: operations.GetFilesRequest) -> operations.GetFilesResponse:
        r"""Returns a paginated list of files
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_by_id_or_url(self, request: operations.GetFilesByIDOrURLRequest) -> operations.GetFilesByIDOrURLResponse:
        r"""Get the details for a file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/byIdOrUrl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesByIDOrURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_download(self, request: operations.GetFilesDownloadRequest) -> operations.GetFilesDownloadResponse:
        r"""A signed URL for downloading a private file can be returned by providing the fileId.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/download"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files(self, request: operations.PostFilesRequest) -> operations.PostFilesResponse:
        r"""Uploads a file.
        - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. 
        - This method is called on behalf of a developer.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files_url(self, request: operations.PostFilesURLRequest) -> operations.PostFilesURLResponse:
        r"""Uploads a file from a URL
        - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
        - This method is called on behalf of a developer.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/url"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    