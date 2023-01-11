import dataclasses
from typing import Optional
from ..shared import device as shared_device


@dataclasses.dataclass
class PostDevicesRequest:
    request: shared_device.Device = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device: Optional[shared_device.Device] = dataclasses.field(default=None)
    
