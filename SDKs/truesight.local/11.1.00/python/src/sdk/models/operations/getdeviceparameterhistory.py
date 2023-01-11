import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDeviceParameterHistoryPathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceParameterHistoryQueryParams:
    monitor_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'monitorType', 'style': 'form', 'explode': True }})
    parameter_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'parameterName', 'style': 'form', 'explode': True }})
    from_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    monitor_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceParameterHistoryRequest:
    path_params: GetDeviceParameterHistoryPathParams = dataclasses.field()
    query_params: GetDeviceParameterHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceParameterHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
