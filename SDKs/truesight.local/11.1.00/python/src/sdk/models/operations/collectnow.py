import dataclasses
from typing import Optional


@dataclasses.dataclass
class CollectNowPathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectNowQueryParams:
    monitor_class: str = dataclasses.field(metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CollectNowRequest:
    path_params: CollectNowPathParams = dataclasses.field()
    query_params: CollectNowQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectNowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
