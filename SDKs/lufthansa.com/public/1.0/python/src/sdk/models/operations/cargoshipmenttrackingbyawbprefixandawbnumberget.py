import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams:
    a_wb_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'aWBNumber', 'style': 'simple', 'explode': False }})
    a_wb_prefix: str = dataclasses.field(metadata={'path_param': { 'field_name': 'aWBPrefix', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest:
    headers: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders = dataclasses.field()
    path_params: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams = dataclasses.field()
    security: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cargo_shipment_tracking_by_awb_prefix_and_awb_number_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
