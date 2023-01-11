import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SiteTypes:
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

    
    def site_types_get_sites_for_public_facing_api(self, request: operations.SiteTypesGetSitesForPublicFacingAPIRequest) -> operations.SiteTypesGetSitesForPublicFacingAPIResponse:
        r"""Returns the layer metadata for the LayerId specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/sitetypes/{siteType_Id}/sites", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteTypesGetSitesForPublicFacingAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteTypeLayer])
                res.site_type_layer = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def site_types_index(self, request: operations.SiteTypesIndexRequest) -> operations.SiteTypesIndexResponse:
        r"""Return list of site types
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/sitetypes", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteTypesIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteTypeResponse])
                res.site_type_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    