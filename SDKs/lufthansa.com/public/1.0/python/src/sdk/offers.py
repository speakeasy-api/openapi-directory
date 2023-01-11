import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Offers:
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

    
    def offers_lounges_by_location_get(self, request: operations.OffersLoungesByLocationGetRequest) -> operations.OffersLoungesByLocationGetResponse:
        r"""Lounges
        Lounge information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offers/lounges/{location}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OffersLoungesByLocationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.offers_lounges_by_location_get_200_application_json_object = out

        return res

    
    def offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get(self, request: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest) -> operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse:
        r"""Seat Maps
        Cabin layout and seat characteristics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get_200_application_json_object = out

        return res

    