import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Areas:
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

    
    def areas_get(self, request: operations.AreasGetRequest) -> operations.AreasGetResponse:
        r"""Returns list of areas
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/areas", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AreasGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AreaResponse])
                res.area_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v_version_areas_area_ids_(self, request: operations.GetVVersionAreasAreaIdsRequest) -> operations.GetVVersionAreasAreaIdsResponse:
        r"""Returns details of selected area
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/areas/{area_Ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVVersionAreasAreaIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AreaResponse])
                res.area_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    