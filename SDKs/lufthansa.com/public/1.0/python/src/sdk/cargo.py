import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Cargo:
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

    
    def cargo_get_route_from_date_product_code_by_origin_and_destination_get(self, request: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest) -> operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse:
        r"""Retrieve all flights
        Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object = out

        return res

    
    def cargo_shipment_tracking_by_awb_prefix_and_awb_number_get(self, request: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest) -> operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse:
        r"""Shipment Tracking
        With this tracking service you can easily retrieve your shipment or flight status information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cargo_shipment_tracking_by_awb_prefix_and_awb_number_get_200_application_json_object = out

        return res

    