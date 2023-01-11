import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkEventsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkEventsProductTypeEnum(str, Enum):
    WIRELESS = "wireless"
    APPLIANCE = "appliance"
    SWITCH = "switch"
    SYSTEMS_MANAGER = "systemsManager"
    CAMERA = "camera"
    CELLULAR_GATEWAY = "cellularGateway"


@dataclasses.dataclass
class GetNetworkEventsQueryParams:
    client_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientIp', 'style': 'form', 'explode': True }})
    client_mac: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientMac', 'style': 'form', 'explode': True }})
    client_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientName', 'style': 'form', 'explode': True }})
    device_mac: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceMac', 'style': 'form', 'explode': True }})
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceName', 'style': 'form', 'explode': True }})
    device_serial: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    excluded_event_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludedEventTypes', 'style': 'form', 'explode': False }})
    included_event_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includedEventTypes', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    product_type: Optional[GetNetworkEventsProductTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'productType', 'style': 'form', 'explode': True }})
    sm_device_mac: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'smDeviceMac', 'style': 'form', 'explode': True }})
    sm_device_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'smDeviceName', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkEventsRequest:
    path_params: GetNetworkEventsPathParams = dataclasses.field()
    query_params: GetNetworkEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkEventsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_events_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
