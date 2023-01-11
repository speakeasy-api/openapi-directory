import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Rates:
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

    
    def calculate_rates(self, request: operations.CalculateRatesRequest) -> operations.CalculateRatesResponse:
        r"""Get Shipping Rates
        It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
        so we provide functionality to show you all your options!
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/rates"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalculateRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalculateRatesResponseBody])
                res.calculate_rates_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def compare_bulk_rates(self, request: operations.CompareBulkRatesRequest) -> operations.CompareBulkRatesResponse:
        r"""Get Bulk Rates
        Get Bulk Shipment Rates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/rates/bulk"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompareBulkRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.BulkRate]])
                res.compare_bulk_rates_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def estimate_rates(self, request: operations.EstimateRatesRequest) -> operations.EstimateRatesResponse:
        r"""Estimate Rates
        Get Rate Estimates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/rates/estimate"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimateRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Rate]])
                res.estimate_rates_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def get_rate_by_id(self, request: operations.GetRateByIDRequest) -> operations.GetRateByIDResponse:
        r"""Get Rate By ID
        Retrieve a previously queried rate by its ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/rates/{rate_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRateByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRateByIDResponseBody])
                res.get_rate_by_id_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    