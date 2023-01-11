import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Aquifers:
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

    
    def aquifers_files_list(self, request: operations.AquifersFilesListRequest) -> operations.AquifersFilesListResponse:
        r"""list files found for the aquifer identified in the uri
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aquifers/{aquifer_id}/files", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquifersFilesList200ApplicationJSON])
                res.aquifers_files_list_200_application_json_object = out

        return res

    
    def aquifers_list(self, request: operations.AquifersListRequest) -> operations.AquifersListResponse:
        r"""return a list of aquifers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquifersList200ApplicationJSON])
                res.aquifers_list_200_application_json_object = out

        return res

    
    def aquifers_names_list(self, request: operations.AquifersNamesListRequest) -> operations.AquifersNamesListResponse:
        r"""List all aquifers in a simplified format
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifers/names/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersNamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AquiferSerializerBasic]])
                res.aquifer_serializer_basics = out

        return res

    
    def aquifers_read(self, request: operations.AquifersReadRequest) -> operations.AquifersReadResponse:
        r"""return details of aquifers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aquifers/{aquifer_id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aquifer])
                res.aquifer = out

        return res

    