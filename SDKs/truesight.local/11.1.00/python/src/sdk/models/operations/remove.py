import dataclasses
from typing import Optional


@dataclasses.dataclass
class RemovePathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveQueryParams:
    monitor_class: str = dataclasses.field(metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    monitor_sid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RemoveRequest:
    path_params: RemovePathParams = dataclasses.field()
    query_params: RemoveQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
