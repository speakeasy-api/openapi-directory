"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class DomesticScheduledPayments:
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def create_domestic_scheduled_payment_consents_json(self, request: operations.CreateDomesticScheduledPaymentConsentsJSONRequest, security: operations.CreateDomesticScheduledPaymentConsentsJSONSecurity) -> operations.CreateDomesticScheduledPaymentConsentsJSONResponse:
        r"""Create Domestic Scheduled Payment Consents"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/domestic-scheduled-payment-consents'
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "ob_write_domestic_scheduled_consent4", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateDomesticScheduledPaymentConsentsJSONResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
        elif http_res.status_code in [400, 403, 500]:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
        elif http_res.status_code in [401, 404, 405, 406, 415]:
            pass
        elif http_res.status_code == 429:
            res.headers = http_res.headers
            

        return res

    def create_domestic_scheduled_payment_consents_raw(self, request: operations.CreateDomesticScheduledPaymentConsentsRawRequest, security: operations.CreateDomesticScheduledPaymentConsentsRawSecurity) -> operations.CreateDomesticScheduledPaymentConsentsRawResponse:
        r"""Create Domestic Scheduled Payment Consents"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/domestic-scheduled-payment-consents'
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'raw')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateDomesticScheduledPaymentConsentsRawResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
        elif http_res.status_code in [400, 403, 500]:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
        elif http_res.status_code in [401, 404, 405, 406, 415]:
            pass
        elif http_res.status_code == 429:
            res.headers = http_res.headers
            

        return res

    def create_domestic_scheduled_payments_json(self, request: operations.CreateDomesticScheduledPaymentsJSONRequest, security: operations.CreateDomesticScheduledPaymentsJSONSecurity) -> operations.CreateDomesticScheduledPaymentsJSONResponse:
        r"""Create Domestic Scheduled Payments"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/domestic-scheduled-payments'
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "ob_write_domestic_scheduled2", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateDomesticScheduledPaymentsJSONResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
        elif http_res.status_code in [400, 403, 500]:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
        elif http_res.status_code in [401, 404, 405, 406, 415]:
            pass
        elif http_res.status_code == 429:
            res.headers = http_res.headers
            

        return res

    def create_domestic_scheduled_payments_raw(self, request: operations.CreateDomesticScheduledPaymentsRawRequest, security: operations.CreateDomesticScheduledPaymentsRawSecurity) -> operations.CreateDomesticScheduledPaymentsRawResponse:
        r"""Create Domestic Scheduled Payments"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/domestic-scheduled-payments'
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'raw')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateDomesticScheduledPaymentsRawResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
        elif http_res.status_code in [400, 403, 500]:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
        elif http_res.status_code in [401, 404, 405, 406, 415]:
            pass
        elif http_res.status_code == 429:
            res.headers = http_res.headers
            

        return res

    def get_domestic_scheduled_payment_consents_consent_id(self, request: operations.GetDomesticScheduledPaymentConsentsConsentIDRequest, security: operations.GetDomesticScheduledPaymentConsentsConsentIDSecurity) -> operations.GetDomesticScheduledPaymentConsentsConsentIDResponse:
        r"""Get Domestic Scheduled Payment Consents"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetDomesticScheduledPaymentConsentsConsentIDRequest, base_url, '/domestic-scheduled-payment-consents/{ConsentId}', request)
        
        headers = utils.get_headers(request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetDomesticScheduledPaymentConsentsConsentIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
        elif http_res.status_code in [400, 403, 500]:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
        elif http_res.status_code in [401, 404, 405, 406]:
            pass
        elif http_res.status_code == 429:
            res.headers = http_res.headers
            

        return res

    def get_domestic_scheduled_payments_domestic_scheduled_payment_id(self, request: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDRequest, security: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDSecurity) -> operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDResponse:
        r"""Get Domestic Scheduled Payments"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDRequest, base_url, '/domestic-scheduled-payments/{DomesticScheduledPaymentId}', request)
        
        headers = utils.get_headers(request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
        elif http_res.status_code in [400, 403, 500]:
            if utils.match_content_type(content_type, 'application/jose+jwe'):
                res.body = http_res.content
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.OBErrorResponse1])
                res.ob_error_response1 = out
        elif http_res.status_code in [401, 404, 405, 406]:
            pass
        elif http_res.status_code == 429:
            res.headers = http_res.headers
            

        return res

    