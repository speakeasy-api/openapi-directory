import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class PayoutService:
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

    
    def create_quote_for_payout_v3(self, request: operations.CreateQuoteForPayoutV3Request) -> operations.CreateQuoteForPayoutV3Response:
        r"""Create a quote for the payout
        Create quote for a payout
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payouts/{payoutId}/quote", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateQuoteForPayoutV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuoteResponseV3])
                res.quote_response_v3 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_409 = out

        return res

    
    def get_payments_for_payout_v3(self, request: operations.GetPaymentsForPayoutV3Request) -> operations.GetPaymentsForPayoutV3Response:
        r"""Retrieve payments for a payout
        Retrieve payments for a payout
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payouts/{payoutId}/payments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentsForPayoutV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PagedPaymentsResponseV3])
                res.paged_payments_response_v3 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def get_payout_summary_v3(self, request: operations.GetPayoutSummaryV3Request) -> operations.GetPayoutSummaryV3Response:
        r"""Get Payout Summary
        Get payout summary - returns the current state of the payout.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payouts/{payoutId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayoutSummaryV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayoutSummaryResponseV3])
                res.payout_summary_response_v3 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def instruct_payout_v3(self, request: operations.InstructPayoutV3Request) -> operations.InstructPayoutV3Response:
        r"""Instruct Payout
        Instruct a payout to be made for the specified payoutId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payouts/{payoutId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InstructPayoutV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_409 = out

        return res

    
    def submit_payout_v3(self, request: operations.SubmitPayoutV3Request) -> operations.SubmitPayoutV3Response:
        r"""Submit Payout
        <p>Create a new payout and return a location header with a link to get the payout.</p>
        <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously.</p>
        <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header.</p>
        <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc.</p>
         with no decimal places.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/payouts"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitPayoutV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out

        return res

    
    def withdraw_payment(self, request: operations.WithdrawPaymentRequest) -> operations.WithdrawPaymentResponse:
        r"""Withdraw a Payment
        <p>withdraw a payment </p>
        <p>There are a variety of reasons why this can fail</p>
        <ul>
            <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
            <li>the payout must not be in a state of 'instructed'</li>
        </ul>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payments/{paymentId}/withdraw", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WithdrawPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def withdraw_payout_v3(self, request: operations.WithdrawPayoutV3Request) -> operations.WithdrawPayoutV3Response:
        r"""Withdraw Payout
        Withdraw Payout will delete payout details from payout service and rails services but will just move the status of the payout to WITHDRAWN in payment audit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payouts/{payoutId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WithdrawPayoutV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    