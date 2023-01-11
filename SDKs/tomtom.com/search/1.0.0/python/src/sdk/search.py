import requests
from sdk.models import operations
from . import utils

class Search:
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

    
    def get_search_version_number_c_s_category_ext_(self, request: operations.GetSearchVersionNumberCSCategoryExtRequest) -> operations.GetSearchVersionNumberCSCategoryExtResponse:
        r"""Low Bandwith Category Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/cS/{category}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberCSCategoryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_category_search_query_ext_(self, request: operations.GetSearchVersionNumberCategorySearchQueryExtRequest) -> operations.GetSearchVersionNumberCategorySearchQueryExtResponse:
        r"""Category Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/categorySearch/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberCategorySearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_geometry_search_query_ext_(self, request: operations.GetSearchVersionNumberGeometrySearchQueryExtRequest) -> operations.GetSearchVersionNumberGeometrySearchQueryExtResponse:
        r"""Geometry Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberGeometrySearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_nearby_search_ext_(self, request: operations.GetSearchVersionNumberNearbySearchExtRequest) -> operations.GetSearchVersionNumberNearbySearchExtResponse:
        r"""Nearby Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/nearbySearch/.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberNearbySearchExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_poi_search_query_ext_(self, request: operations.GetSearchVersionNumberPoiSearchQueryExtRequest) -> operations.GetSearchVersionNumberPoiSearchQueryExtResponse:
        r"""Points of Interest Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/poiSearch/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberPoiSearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_routed_search_query_position_heading_ext_(self, request: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest) -> operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse:
        r"""Routed Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_s_query_ext_(self, request: operations.GetSearchVersionNumberSQueryExtRequest) -> operations.GetSearchVersionNumberSQueryExtResponse:
        r"""Low bandwith Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/s/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberSQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_search_query_ext_(self, request: operations.GetSearchVersionNumberSearchQueryExtRequest) -> operations.GetSearchVersionNumberSearchQueryExtResponse:
        r"""Fuzzy Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/search/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberSearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_search_version_number_geometry_search_query_ext_(self, request: operations.PostSearchVersionNumberGeometrySearchQueryExtRequest) -> operations.PostSearchVersionNumberGeometrySearchQueryExtResponse:
        r"""Geometry Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberGeometrySearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_search_version_number_search_along_route_query_ext_(self, request: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest) -> operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse:
        r"""Along Route Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/searchAlongRoute/{query}.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    