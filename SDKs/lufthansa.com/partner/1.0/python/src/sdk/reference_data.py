import requests
from sdk.models import operations
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

    
    def seat_details(self, request: operations.SeatDetailsRequest) -> operations.SeatDetailsResponse:
        r"""Seat Details
        A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/references/seatdetails/{aircraftCode}/{cabinCode}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SeatDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.seat_details_200_application_json_string = r.content

        return res

    