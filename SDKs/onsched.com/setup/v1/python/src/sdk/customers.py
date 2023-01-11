import requests
from typing import Any,Optional
from sdk.models import shared, operations
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

    
    def get_setup_v1_customers(self, request: operations.GetSetupV1CustomersRequest) -> operations.GetSetupV1CustomersResponse:
        r"""Returns a list of customers.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/customers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_list_view_model = out

        return res

    
    def get_setup_v1_customers_id_(self, request: operations.GetSetupV1CustomersIDRequest) -> operations.GetSetupV1CustomersIDResponse:
        r"""Returns a customer object.
        The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
        or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/customers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerViewModel])
                res.customer_view_model = out

        return res

    
    def get_setup_v1_customers_id_privacy(self, request: operations.GetSetupV1CustomersIDPrivacyRequest) -> operations.GetSetupV1CustomersIDPrivacyResponse:
        r"""Returns a customer privacy report data.
        The result returned contains customer data and customer appointments data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/customers/{id}/privacy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersIDPrivacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_privacy_view_model = out

        return res

    