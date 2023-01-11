import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Operations:
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

    
    def operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get(self, request: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest) -> operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse:
        r"""Flight Status at Arrival Airport
        Status of all arrivals at a given airport up to 4 hours from the provided date time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get_200_application_json_object = out

        return res

    
    def operations_flightstatus_by_flight_number_and_date_get(self, request: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest) -> operations.OperationsFlightstatusByFlightNumberAndDateGetResponse:
        r"""Flight Status
        Status of a particular flight (boarding, delayed, etc.).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/operations/flightstatus/{flightNumber}/{date}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusByFlightNumberAndDateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_by_flight_number_and_date_get_200_application_json_object = out

        return res

    
    def operations_flightstatus_departures_by_airport_code_and_from_date_time_get(self, request: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest) -> operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse:
        r"""Flight Status at Departure Airport
        Status of all departures from a given airport up to 4 hours from the provided date time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_departures_by_airport_code_and_from_date_time_get_200_application_json_object = out

        return res

    
    def operations_flightstatus_route_date_by_origin_and_destination_get(self, request: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest) -> operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse:
        r"""Flight Status by Route
        Status of flights between a given origin and destination on a given date.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/operations/flightstatus/route/{origin}/{destination}/{date}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_route_date_by_origin_and_destination_get_200_application_json_object = out

        return res

    
    def operations_schedules_from_date_time_by_origin_and_destination_get(self, request: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest) -> operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse:
        r"""Flight Schedules
        Scheduled flights between given airports on a given date.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/operations/schedules/{origin}/{destination}/{fromDateTime}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_schedules_from_date_time_by_origin_and_destination_get_200_application_json_object = out

        return res

    