import requests
from sdk.models import operations
from . import utils

class Support:
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

    
    def get_ip_address(self) -> operations.GetIPAddressResponse:
        r"""Return the IP address from where your API request originated
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ip-address"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_service_status(self) -> operations.GetServiceStatusResponse:
        r"""List all Service Status messages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service-status"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServiceStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_support_ip_address(self) -> operations.GetSupportIPAddressResponse:
        r"""Return the IP address from where your API request originated
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/support/ip-address"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSupportIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_support_service_status(self) -> operations.GetSupportServiceStatusResponse:
        r"""List all Service Status messages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/support/service-status"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSupportServiceStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    