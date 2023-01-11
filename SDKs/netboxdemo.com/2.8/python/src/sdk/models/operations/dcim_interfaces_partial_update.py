import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabledeviceinterface as shared_writabledeviceinterface
from ..shared import deviceinterface as shared_deviceinterface


@dataclasses.dataclass
class DcimInterfacesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfacesPartialUpdateRequest:
    path_params: DcimInterfacesPartialUpdatePathParams = dataclasses.field()
    request: shared_writabledeviceinterface.WritableDeviceInterfaceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInterfacesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_interface: Optional[shared_deviceinterface.DeviceInterface] = dataclasses.field(default=None)
    
