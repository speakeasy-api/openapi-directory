import dataclasses
from typing import Optional
from ..shared import writabledevicetype as shared_writabledevicetype
from ..shared import devicetype as shared_devicetype


@dataclasses.dataclass
class DcimDeviceTypesCreateRequest:
    request: shared_writabledevicetype.WritableDeviceTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceTypesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_type: Optional[shared_devicetype.DeviceType] = dataclasses.field(default=None)
    
