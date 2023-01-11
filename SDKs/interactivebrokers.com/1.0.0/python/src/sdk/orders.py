import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Orders:
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

    
    def delete_accounts_account_orders_customer_order_id_(self, request: operations.DeleteAccountsAccountOrdersCustomerOrderIDRequest) -> operations.DeleteAccountsAccountOrdersCustomerOrderIDResponse:
        r"""Cancel Order
        Cancels the order with the referenced Customer Order ID for the account passed in the URL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders/{CustomerOrderId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAccountsAccountOrdersCustomerOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON]])
                res.delete_accounts_account_orders_customer_order_id_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_orders(self, request: operations.GetAccountsAccountOrdersRequest) -> operations.GetAccountsAccountOrdersResponse:
        r"""Open Orders
        Returns a list of orders for the account passed in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.OrderState]])
                res.order_states = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_orders_customer_order_id_(self, request: operations.GetAccountsAccountOrdersCustomerOrderIDRequest) -> operations.GetAccountsAccountOrdersCustomerOrderIDResponse:
        r"""Return specific order info
        Returns the order with the referenced Customer Order ID for the account passed in the URL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders/{CustomerOrderId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountOrdersCustomerOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.OrderState]])
                res.order_states = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_accounts_account_orders(self, request: operations.PostAccountsAccountOrdersRequest) -> operations.PostAccountsAccountOrdersResponse:
        r"""Place Order
        Places order
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountsAccountOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.OrderState]])
                res.order_states = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def put_accounts_account_orders_customer_order_id_(self, request: operations.PutAccountsAccountOrdersCustomerOrderIDRequest) -> operations.PutAccountsAccountOrdersCustomerOrderIDResponse:
        r"""Modify Order
        Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders/{CustomerOrderId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAccountsAccountOrdersCustomerOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON]])
                res.put_accounts_account_orders_customer_order_id_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    