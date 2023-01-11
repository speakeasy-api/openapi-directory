import dataclasses
from typing import Optional
from ..shared import writabledevicewithconfigcontext as shared_writabledevicewithconfigcontext
from ..shared import devicewithconfigcontext as shared_devicewithconfigcontext


@dataclasses.dataclass
class DcimDevicesCreateRequest:
    request: shared_writabledevicewithconfigcontext.WritableDeviceWithConfigContextInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDevicesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_with_config_context: Optional[shared_devicewithconfigcontext.DeviceWithConfigContext] = dataclasses.field(default=None)
    
