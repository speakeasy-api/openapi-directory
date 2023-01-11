import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Quality:
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

    
    def quality_get_daily_data_quality_for_site(self, request: operations.QualityGetDailyDataQualityForSiteRequest) -> operations.QualityGetDailyDataQualityForSiteResponse:
        r"""Get Site DailyQuality
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/quality/daily", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QualityGetDailyDataQualityForSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DailyQualityResponse])
                res.daily_quality_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def quality_get_overall_data_quality_for_sites(self, request: operations.QualityGetOverallDataQualityForSitesRequest) -> operations.QualityGetOverallDataQualityForSitesResponse:
        r"""Get Site OverallQuality
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/quality/overall", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QualityGetOverallDataQualityForSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverallQualityResponse])
                res.overall_quality_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    