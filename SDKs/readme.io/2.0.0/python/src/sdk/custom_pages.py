import requests
from sdk.models import operations
from . import utils

class CustomPages:
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

    
    def create_custom_page(self, request: operations.CreateCustomPageRequest) -> operations.CreateCustomPageResponse:
        r"""Create custom page
        Create a new custom page inside of this project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custompages"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def delete_custom_page(self, request: operations.DeleteCustomPageRequest) -> operations.DeleteCustomPageResponse:
        r"""Delete custom page
        Delete the custom page with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custompages/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_custom_page(self, request: operations.GetCustomPageRequest) -> operations.GetCustomPageResponse:
        r"""Get custom page
        Returns the custom page with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custompages/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_custom_pages(self, request: operations.GetCustomPagesRequest) -> operations.GetCustomPagesResponse:
        r"""Get custom pages
        Returns a list of custom pages associated with the project API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custompages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomPagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    
    def update_custom_page(self, request: operations.UpdateCustomPageRequest) -> operations.UpdateCustomPageResponse:
        r"""Update custom page
        Update a custom page with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custompages/{slug}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    