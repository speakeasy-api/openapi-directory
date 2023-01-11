import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkTrafficPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkTrafficDeviceTypeEnum(str, Enum):
    COMBINED = "combined"
    WIRELESS = "wireless"
    SWITCH = "switch"
    APPLIANCE = "appliance"


@dataclasses.dataclass
class GetNetworkTrafficQueryParams:
    device_type: Optional[GetNetworkTrafficDeviceTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceType', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkTrafficRequest:
    path_params: GetNetworkTrafficPathParams = dataclasses.field()
    query_params: GetNetworkTrafficQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkTrafficResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_traffic_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
