import requests
from sdk.models import operations
from . import utils

class StripeGatewayProcessPaymentsAndRefunds:
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

    
    def delete_stripe_gateway_developer_developer_id_accounts_stripe_id_(self, request: operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDRequest) -> operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse:
        r"""Disconnects a developer's Stripe account
        
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/developer/{developerId}/accounts/{stripeId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def delete_stripe_gateway_user_user_id_cards_card_id_(self, request: operations.DeleteStripeGatewayUserUserIDCardsCardIDRequest) -> operations.DeleteStripeGatewayUserUserIDCardsCardIDResponse:
        r"""Removes a credit card for a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards/{cardId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStripeGatewayUserUserIDCardsCardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_stripe_gateway_developer_developer_id_accounts(self, request: operations.GetStripeGatewayDeveloperDeveloperIDAccountsRequest) -> operations.GetStripeGatewayDeveloperDeveloperIDAccountsResponse:
        r"""Returns a developers connected Stripe accounts
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/developer/{developerId}/accounts", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStripeGatewayDeveloperDeveloperIDAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_stripe_gateway_user_user_id_cards(self, request: operations.GetStripeGatewayUserUserIDCardsRequest) -> operations.GetStripeGatewayUserUserIDCardsResponse:
        r"""Returns credit cards for this user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStripeGatewayUserUserIDCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_stripe_gateway_developer_developer_id_accounts(self, request: operations.PostStripeGatewayDeveloperDeveloperIDAccountsRequest) -> operations.PostStripeGatewayDeveloperDeveloperIDAccountsResponse:
        r"""Generate a temporary URL to allow a developer to connect their Stripe account
        - Results are returned for the market provided within the basic authentication credentials 
        - The URL generated by this method is only valid for 48 hours.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/developer/{developerId}/accounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStripeGatewayDeveloperDeveloperIDAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_stripe_gateway_user_user_id_cards(self, request: operations.PostStripeGatewayUserUserIDCardsRequest) -> operations.PostStripeGatewayUserUserIDCardsResponse:
        r"""Adds credit card for this user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStripeGatewayUserUserIDCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_stripe_gateway_user_user_id_cards_card_id_(self, request: operations.PostStripeGatewayUserUserIDCardsCardIDRequest) -> operations.PostStripeGatewayUserUserIDCardsCardIDResponse:
        r"""Updates a credit card for this user
        
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards/{cardId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStripeGatewayUserUserIDCardsCardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    