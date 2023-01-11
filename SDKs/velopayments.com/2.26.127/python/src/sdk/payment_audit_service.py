import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class PaymentAuditService:
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

    
    def export_transactions_csvv4(self, request: operations.ExportTransactionsCsvv4Request) -> operations.ExportTransactionsCsvv4Response:
        r"""Export Transactions
        Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/paymentaudit/transactions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportTransactionsCsvv4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/csv"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_fundings_v4(self, request: operations.GetFundingsV4Request) -> operations.GetFundingsV4Response:
        r"""Get Fundings for Payor
        <p>Get a list of Fundings for a payor.</p>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/paymentaudit/fundings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFundingsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetFundingsResponse])
                res.get_fundings_response = out
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

    
    def get_payment_details_v4(self, request: operations.GetPaymentDetailsV4Request) -> operations.GetPaymentDetailsV4Response:
        r"""Get Payment
        Get the payment with the given id. This contains the payment history.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/paymentaudit/payments/{paymentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentDetailsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentResponseV4])
                res.payment_response_v4 = out
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

    
    def get_payments_for_payout_v4(self, request: operations.GetPaymentsForPayoutV4Request) -> operations.GetPaymentsForPayoutV4Response:
        r"""Get Payments for Payout
        Get List of payments for Payout, allowing for RETURNED status
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/paymentaudit/payouts/{payoutId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentsForPayoutV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentsForPayoutResponseV4])
                res.get_payments_for_payout_response_v4 = out
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

    
    def get_payout_stats_v4(self, request: operations.GetPayoutStatsV4Request) -> operations.GetPayoutStatsV4Response:
        r"""Get Payout Statistics
        <p>Get payout statistics for a payor.</p>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/paymentaudit/payoutStatistics"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayoutStatsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPayoutStatistics])
                res.get_payout_statistics = out
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

    
    def get_payouts_for_payor_v4(self, request: operations.GetPayoutsForPayorV4Request) -> operations.GetPayoutsForPayorV4Response:
        r"""Get Payouts for Payor
        Get List of payouts for payor
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/paymentaudit/payouts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayoutsForPayorV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPayoutsResponse])
                res.get_payouts_response = out
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

    
    def list_payment_changes_v4(self, request: operations.ListPaymentChangesV4Request) -> operations.ListPaymentChangesV4Response:
        r"""List Payment Changes
        Get a paginated response listing payment changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/payments/deltas"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPaymentChangesV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentDeltaResponse])
                res.payment_delta_response = out
        elif r.status_code == 400:
            pass

        return res

    
    def list_payments_audit_v4(self, request: operations.ListPaymentsAuditV4Request) -> operations.ListPaymentsAuditV4Response:
        r"""Get List of Payments
        Get payments for the given payor Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/paymentaudit/payments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPaymentsAuditV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPaymentsResponseV4])
                res.list_payments_response_v4 = out
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

    