import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Drillers:
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

    
    def drillers_files_list(self, request: operations.DrillersFilesListRequest) -> operations.DrillersFilesListResponse:
        r"""list files found for the aquifer identified in the uri
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/drillers/{person_guid}/files/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DrillersFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DrillersFilesList200ApplicationJSON])
                res.drillers_files_list_200_application_json_object = out

        return res

    
    def drillers_list(self, request: operations.DrillersListRequest) -> operations.DrillersListResponse:
        r"""Returns a list of all person records
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/drillers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrillersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PersonList]])
                res.person_lists = out

        return res

    
    def drillers_names_list(self, request: operations.DrillersNamesListRequest) -> operations.DrillersNamesListResponse:
        r"""Search for a person in the Register
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/drillers/names/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrillersNamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PersonName]])
                res.person_names = out

        return res

    