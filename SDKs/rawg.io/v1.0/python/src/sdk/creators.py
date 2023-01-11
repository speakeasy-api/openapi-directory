import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Creators:
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

    
    def creators_list(self, request: operations.CreatorsListRequest) -> operations.CreatorsListResponse:
        r"""Get a list of game creators.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/creators"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatorsList200ApplicationJSON])
                res.creators_list_200_application_json_object = out

        return res

    
    def creators_read(self, request: operations.CreatorsReadRequest) -> operations.CreatorsReadResponse:
        r"""Get details of the creator.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/creators/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatorsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonSingle])
                res.person_single = out

        return res

    