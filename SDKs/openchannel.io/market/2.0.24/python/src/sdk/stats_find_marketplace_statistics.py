import requests
from sdk.models import operations
from . import utils

class StatsFindMarketplaceStatistics:
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

    
    def get_stats_series_period_fields_(self, request: operations.GetStatsSeriesPeriodFieldsRequest) -> operations.GetStatsSeriesPeriodFieldsResponse:
        r"""Return a timeseries for a particular field
        Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/series/{period}/{fields}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsSeriesPeriodFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_stats_total(self, request: operations.GetStatsTotalRequest) -> operations.GetStatsTotalResponse:
        r"""Returns the total number of events for a particular field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/total"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsTotalResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_stats_increment_field_(self, request: operations.PostStatsIncrementFieldRequest) -> operations.PostStatsIncrementFieldResponse:
        r"""Increments a statistics field
        increment a statistics field
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/increment/{field}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStatsIncrementFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    