import requests
from sdk.models import operations
from . import utils

class RatStrain:
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

    
    def get_all_strains_using_get(self) -> operations.GetAllStrainsUsingGetResponse:
        r"""Return all active strains in RGD
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/strains/all"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllStrainsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strain_by_rgd_id_using_get(self, request: operations.GetStrainByRgdIDUsingGetRequest) -> operations.GetStrainByRgdIDUsingGetResponse:
        r"""Return a strain by RGD ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/strains/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainByRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strains_by_position_using_get(self, request: operations.GetStrainsByPositionUsingGetRequest) -> operations.GetStrainsByPositionUsingGetResponse:
        r"""Return all active strains by position
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/strains/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainsByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    