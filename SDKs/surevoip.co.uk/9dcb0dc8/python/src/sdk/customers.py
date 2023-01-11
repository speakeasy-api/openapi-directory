import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Customers:
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

    
    def get_customer(self, request: operations.GetCustomerRequest) -> operations.GetCustomerResponse:
        r"""Represents a customer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomer200ApplicationJSON])
                res.get_customer_200_application_json_object = out

        return res

    
    def get_customers(self) -> operations.GetCustomersResponse:
        r"""List all customers or find your own account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customers"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomers302ApplicationJSON])
                res.get_customers_302_application_json_object = out

        return res

    