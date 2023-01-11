import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesPacketsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesPacketsQueryParams:
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesPacketsRequest:
    path_params: GetDeviceSwitchPortsStatusesPacketsPathParams = dataclasses.field()
    query_params: GetDeviceSwitchPortsStatusesPacketsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesPacketsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_ports_statuses_packets_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
