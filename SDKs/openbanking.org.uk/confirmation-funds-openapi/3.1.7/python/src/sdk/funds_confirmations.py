import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FundsConfirmations:
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

    
    def create_funds_confirmation_consents(self, request: operations.CreateFundsConfirmationConsentsRequest) -> operations.CreateFundsConfirmationConsentsResponse:
        r"""Create Funds Confirmation Consent
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/funds-confirmation-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFundsConfirmationConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObFundsConfirmationConsentResponse1])
                res.ob_funds_confirmation_consent_response1 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 415:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_funds_confirmations(self, request: operations.CreateFundsConfirmationsRequest) -> operations.CreateFundsConfirmationsResponse:
        r"""Create Funds Confirmation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/funds-confirmations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFundsConfirmationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObFundsConfirmationResponse1])
                res.ob_funds_confirmation_response1 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 415:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def delete_funds_confirmation_consents_consent_id(self, request: operations.DeleteFundsConfirmationConsentsConsentIDRequest) -> operations.DeleteFundsConfirmationConsentsConsentIDResponse:
        r"""Delete Funds Confirmation Consent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/funds-confirmation-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFundsConfirmationConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_funds_confirmation_consents_consent_id(self, request: operations.GetFundsConfirmationConsentsConsentIDRequest) -> operations.GetFundsConfirmationConsentsConsentIDResponse:
        r"""Get Funds Confirmation Consent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/funds-confirmation-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFundsConfirmationConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObFundsConfirmationConsentResponse1])
                res.ob_funds_confirmation_consent_response1 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    