import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Stores:
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

    
    def stores_list(self, request: operations.StoresListRequest) -> operations.StoresListResponse:
        r"""Get a list of video game storefronts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stores"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.StoresList200ApplicationJSON])
                res.stores_list_200_application_json_object = out

        return res

    
    def stores_read(self, request: operations.StoresReadRequest) -> operations.StoresReadResponse:
        r"""Get details of the store.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stores/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoresReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreSingle])
                res.store_single = out

        return res

    