import requests
from sdk.models import operations
from . import utils

class TransactionsFindPaymentsAndRefunds:
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

    
    def delete_transactions_transaction_id_(self, request: operations.DeleteTransactionsTransactionIDRequest) -> operations.DeleteTransactionsTransactionIDResponse:
        r"""Deleted a transaction
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTransactionsTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def get_transactions(self, request: operations.GetTransactionsRequest) -> operations.GetTransactionsResponse:
        r"""Returns a paginated list of transactions
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transactions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_transactions_transaction_id_(self, request: operations.GetTransactionsTransactionIDRequest) -> operations.GetTransactionsTransactionIDResponse:
        r"""Returns a transaction
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def post_transactions_transaction_id_(self, request: operations.PostTransactionsTransactionIDRequest) -> operations.PostTransactionsTransactionIDResponse:
        r"""Updates a transaction
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTransactionsTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    