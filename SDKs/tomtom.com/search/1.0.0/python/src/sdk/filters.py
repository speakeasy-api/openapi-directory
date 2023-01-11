import requests
from sdk.models import operations
from . import utils

class Filters:
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

    
    def get_search_version_number_geometry_filter_ext_(self, request: operations.GetSearchVersionNumberGeometryFilterExtRequest) -> operations.GetSearchVersionNumberGeometryFilterExtResponse:
        r"""Geometry Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometryFilter.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberGeometryFilterExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_routed_filter_position_heading_ext_(self, request: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest) -> operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
        r"""Routed Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def post_search_version_number_geometry_filter_ext_(self, request: operations.PostSearchVersionNumberGeometryFilterExtRequest) -> operations.PostSearchVersionNumberGeometryFilterExtResponse:
        r"""Geometry Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometryFilter.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberGeometryFilterExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def post_search_version_number_routed_filter_position_heading_ext_(self, request: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest) -> operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
        r"""Routed Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    