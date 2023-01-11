import requests
from sdk.models import operations
from . import utils

class CustomGatewayProcessPaymentsAndRefunds:
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

    
    def post_custom_gateway_payment_ownership_id_(self, request: operations.PostCustomGatewayPaymentOwnershipIDRequest) -> operations.PostCustomGatewayPaymentOwnershipIDResponse:
        r"""Adds a payment for an app on behalf of a user
        - Results are returned for the market provided within the basic authentication credentials 
        - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom-gateway/payment/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomGatewayPaymentOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_custom_gateway_refund_ownership_id_(self, request: operations.PostCustomGatewayRefundOwnershipIDRequest) -> operations.PostCustomGatewayRefundOwnershipIDResponse:
        r"""Fully or partially refund payment for an app on behalf of a user
        - Results are returned for the market provided within the basic authentication credentials
        - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom-gateway/refund/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomGatewayRefundOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    