import dataclasses
from typing import Optional
from ..shared import writabledevice as shared_writabledevice
from ..shared import device as shared_device


@dataclasses.dataclass
class DcimDevicesCreateRequest:
    request: shared_writabledevice.WritableDeviceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDevicesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device: Optional[shared_device.Device] = dataclasses.field(default=None)
    
