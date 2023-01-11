import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Wells:
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

    
    def wells_files_list(self, request: operations.WellsFilesListRequest) -> operations.WellsFilesListResponse:
        r"""list files found for the well identified in the uri
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wells/{tag}/files", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WellsFilesList200ApplicationJSON])
                res.wells_files_list_200_application_json_object = out

        return res

    
    def wells_list(self, request: operations.WellsListRequest) -> operations.WellsListResponse:
        r"""returns a list of wells
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wells/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WellsList200ApplicationJSON])
                res.wells_list_200_application_json_object = out

        return res

    
    def wells_read(self, request: operations.WellsReadRequest) -> operations.WellsReadResponse:
        r"""Return well detail.
        This view is open to all, and has no permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wells/{well_tag_number}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WellDetail])
                res.well_detail = out

        return res

    
    def wells_tags_list(self, request: operations.WellsTagsListRequest) -> operations.WellsTagsListResponse:
        r"""seach for wells by tag or owner
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wells/tags/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.WellTagSearch]])
                res.well_tag_searches = out

        return res

    