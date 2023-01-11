import dataclasses
from typing import Optional
from ..shared import writabledeviceinterface as shared_writabledeviceinterface
from ..shared import deviceinterface as shared_deviceinterface


@dataclasses.dataclass
class DcimInterfacesCreateRequest:
    request: shared_writabledeviceinterface.WritableDeviceInterfaceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInterfacesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_interface: Optional[shared_deviceinterface.DeviceInterface] = dataclasses.field(default=None)
    
