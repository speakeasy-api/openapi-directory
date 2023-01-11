import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Currencies:
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

    
    def get_api_v_version_currencies_history(self, request: operations.GetAPIVVersionCurrenciesHistoryRequest) -> operations.GetAPIVVersionCurrenciesHistoryResponse:
        r"""Get historical prices for requested currency pairs
        Historical OHLC data for the specified period and interval size
        
        The combination of the interval parameter and start and end dates can result in results
        being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.IntervalCollectionResponse]])
                res.interval_collection_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_history_supported(self, request: operations.GetAPIVVersionCurrenciesHistorySupportedRequest) -> operations.GetAPIVVersionCurrenciesHistorySupportedResponse:
        r"""Get list of currency pairs supported by the history endpoint
        Only the currency pairs in the direction noted can be used with the history endpoint.
        For example: USD/CAD is not the same as CAD/USD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/history/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesHistorySupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_api_v_version_currencies_history_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_rate(self, request: operations.GetAPIVVersionCurrenciesRateRequest) -> operations.GetAPIVVersionCurrenciesRateResponse:
        r"""Get latest mid rate for requested currency pairs
        Current Mid Rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/rate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.RateResponse]])
                res.rate_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_rate_supported(self, request: operations.GetAPIVVersionCurrenciesRateSupportedRequest) -> operations.GetAPIVVersionCurrenciesRateSupportedResponse:
        r"""Get list of currencies supported by the rate endpoint
        Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
        For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/rate/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesRateSupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_api_v_version_currencies_rate_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_summary(self, request: operations.GetAPIVVersionCurrenciesSummaryRequest) -> operations.GetAPIVVersionCurrenciesSummaryResponse:
        r"""Get latest Summary for requested currency pairs
        Current and daily summary information combined into a single quote
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SummaryResponse]])
                res.summary_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_summary_supported(self, request: operations.GetAPIVVersionCurrenciesSummarySupportedRequest) -> operations.GetAPIVVersionCurrenciesSummarySupportedResponse:
        r"""Get list of currency pairs supported by the Summary endpoint
        Only the currency pairs in the direction noted can be used with the Summary endpoint.
        For example: USD/CAD is not the same as CAD/USD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/summary/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesSummarySupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_api_v_version_currencies_summary_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    