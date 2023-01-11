import dataclasses
from typing import Optional
from ..shared import device as shared_device


@dataclasses.dataclass
class GetDevicesQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    unique_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uniqueId', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDevicesRequest:
    query_params: GetDevicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    devices: Optional[list[shared_device.Device]] = dataclasses.field(default=None)
    
