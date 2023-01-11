import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class ReferenceData:
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

    
    def references_aircraft_by_aircraft_code_get(self, request: operations.ReferencesAircraftByAircraftCodeGetRequest) -> operations.ReferencesAircraftByAircraftCodeGetResponse:
        r"""Aircraft
        List all aircraft types or one specific aircraft type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/references/aircraft/{aircraftCode}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAircraftByAircraftCodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_aircraft_by_aircraft_code_get_200_application_json_object = out

        return res

    
    def references_airlines_by_airline_code_get(self, request: operations.ReferencesAirlinesByAirlineCodeGetRequest) -> operations.ReferencesAirlinesByAirlineCodeGetResponse:
        r"""Airlines
        List all airlines or one specific airline.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/references/airlines/{airlineCode}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAirlinesByAirlineCodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_airlines_by_airline_code_get_200_application_json_object = out

        return res

    
    def references_airports_by_airport_code_get(self, request: operations.ReferencesAirportsByAirportCodeGetRequest) -> operations.ReferencesAirportsByAirportCodeGetResponse:
        r"""Airports
        List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/references/airports/{airportCode}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAirportsByAirportCodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AirportResponse])
                res.airport_response = out

        return res

    
    def references_airports_nearest_by_latitude_and_longitude_get(self, request: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest) -> operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse:
        r"""Nearest Airports
        List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/references/airports/nearest/{latitude},{longitude}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_airports_nearest_by_latitude_and_longitude_get_200_application_json_object = out

        return res

    
    def references_cities_by_city_code_get(self, request: operations.ReferencesCitiesByCityCodeGetRequest) -> operations.ReferencesCitiesByCityCodeGetResponse:
        r"""Cities
        List all cities or one specific city. It is possible to request the response in a specific language.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/references/cities/{cityCode}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesCitiesByCityCodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_cities_by_city_code_get_200_application_json_object = out

        return res

    
    def references_countries_by_country_code_get(self, request: operations.ReferencesCountriesByCountryCodeGetRequest) -> operations.ReferencesCountriesByCountryCodeGetResponse:
        r"""Countries
        List all countries or one specific country. It is possible to request the response in a specific language.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/references/countries/{countryCode}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesCountriesByCountryCodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_countries_by_country_code_get_200_application_json_object = out

        return res

    