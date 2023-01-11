import dataclasses
from typing import Optional
from ..shared import writabledevicebay as shared_writabledevicebay
from ..shared import devicebay as shared_devicebay


@dataclasses.dataclass
class DcimDeviceBaysCreateRequest:
    request: shared_writabledevicebay.WritableDeviceBayInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceBaysCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_bay: Optional[shared_devicebay.DeviceBay] = dataclasses.field(default=None)
    
