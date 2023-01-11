import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabledevice as shared_writabledevice
from ..shared import device as shared_device


@dataclasses.dataclass
class DcimDevicesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDevicesUpdateRequest:
    path_params: DcimDevicesUpdatePathParams = dataclasses.field()
    request: shared_writabledevice.WritableDeviceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDevicesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device: Optional[shared_device.Device] = dataclasses.field(default=None)
    
