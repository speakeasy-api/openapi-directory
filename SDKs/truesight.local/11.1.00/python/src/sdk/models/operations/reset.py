import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResetPathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResetQueryParams:
    monitor_class: str = dataclasses.field(metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    monitor_sid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ResetRequest:
    path_params: ResetPathParams = dataclasses.field()
    query_params: ResetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
