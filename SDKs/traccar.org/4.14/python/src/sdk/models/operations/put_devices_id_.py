import dataclasses
from typing import Optional
from ..shared import device as shared_device


@dataclasses.dataclass
class PutDevicesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDevicesIDRequest:
    path_params: PutDevicesIDPathParams = dataclasses.field()
    request: shared_device.Device = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutDevicesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device: Optional[shared_device.Device] = dataclasses.field(default=None)
    
