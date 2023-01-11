import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesQueryParams:
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesRequest:
    path_params: GetDeviceSwitchPortsStatusesPathParams = dataclasses.field()
    query_params: GetDeviceSwitchPortsStatusesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchPortsStatusesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_ports_statuses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
