import requests
from sdk.models import operations
from . import utils

class ReverseGeocoding:
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

    
    def get_search_version_number_reverse_geocode_cross_street_position_ext_(self, request: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest) -> operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse:
        r"""Cross Street lookup
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_reverse_geocode_position_ext_(self, request: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest) -> operations.GetSearchVersionNumberReverseGeocodePositionExtResponse:
        r"""Reverse Geocode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberReverseGeocodePositionExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    