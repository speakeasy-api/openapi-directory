import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Taxes:
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

    
    def create_tax_rates(self, request: operations.CreateTaxRatesRequest) -> operations.CreateTaxRatesResponse:
        r"""Creates new tax rates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTaxRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRatesResponse])
                res.tax_rates_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def delete_tax_rate(self, request: operations.DeleteTaxRateRequest) -> operations.DeleteTaxRateResponse:
        r"""Deletes a single tax rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxes/{taxRateUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTaxRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_product_count_for_all_taxes(self, request: operations.GetProductCountForAllTaxesRequest) -> operations.GetProductCountForAllTaxesResponse:
        r"""Gets all tax rates and a count of products associated with each
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes/count"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductCountForAllTaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRateProductCountResponse])
                res.tax_rate_product_count_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def get_tax_rate(self, request: operations.GetTaxRateRequest) -> operations.GetTaxRateResponse:
        r"""Gets a single tax rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxes/{taxRateUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRate])
                res.tax_rate = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_tax_rates(self, request: operations.GetTaxRatesRequest) -> operations.GetTaxRatesResponse:
        r"""Gets all tax rates available
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TaxRatesResponse]])
                res.tax_rates_responses = out
        elif r.status_code == 403:
            pass

        return res

    
    def get_tax_settings(self, request: operations.GetTaxSettingsRequest) -> operations.GetTaxSettingsResponse:
        r"""Gets the organization tax settings 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes/settings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxSettingsResponse])
                res.tax_settings_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def set_taxation_mode(self, request: operations.SetTaxationModeRequest) -> operations.SetTaxationModeResponse:
        r"""Updates the organization tax settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes/settings"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTaxationModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxSettingsResponse])
                res.tax_settings_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def update_tax_rate(self, request: operations.UpdateTaxRateRequest) -> operations.UpdateTaxRateResponse:
        r"""Updates a single tax rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxes/{taxRateUuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaxRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRate])
                res.tax_rate = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    