import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Platforms:
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

    
    def platforms_list(self, request: operations.PlatformsListRequest) -> operations.PlatformsListResponse:
        r"""Get a list of video game platforms.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platforms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlatformsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PlatformsList200ApplicationJSON])
                res.platforms_list_200_application_json_object = out

        return res

    
    def platforms_lists_parents_list(self, request: operations.PlatformsListsParentsListRequest) -> operations.PlatformsListsParentsListResponse:
        r"""Get a list of parent platforms.
        For instance, for PS2 and PS4 the “parent platform” is PlayStation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platforms/lists/parents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlatformsListsParentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PlatformsListsParentsList200ApplicationJSON])
                res.platforms_lists_parents_list_200_application_json_object = out

        return res

    
    def platforms_read(self, request: operations.PlatformsReadRequest) -> operations.PlatformsReadResponse:
        r"""Get details of the platform.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platforms/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlatformsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlatformSingle])
                res.platform_single = out

        return res

    