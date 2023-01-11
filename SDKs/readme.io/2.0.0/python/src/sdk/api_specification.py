import requests
from sdk.models import operations
from . import utils

class APISpecification:
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

    
    def delete_api_specification(self, request: operations.DeleteAPISpecificationRequest) -> operations.DeleteAPISpecificationResponse:
        r"""Delete an API specification in ReadMe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api-specification/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_specification(self, request: operations.GetAPISpecificationRequest) -> operations.GetAPISpecificationResponse:
        r"""Get API specification metadata
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api-specification"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    
    def update_api_specification(self, request: operations.UpdateAPISpecificationRequest) -> operations.UpdateAPISpecificationResponse:
        r"""Update an API specification in ReadMe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api-specification/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def upload_api_specification(self, request: operations.UploadAPISpecificationRequest) -> operations.UploadAPISpecificationResponse:
        r"""Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api-specification"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    