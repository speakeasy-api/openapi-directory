import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabledevicetype as shared_writabledevicetype
from ..shared import devicetype as shared_devicetype


@dataclasses.dataclass
class DcimDeviceTypesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceTypesPartialUpdateRequest:
    path_params: DcimDeviceTypesPartialUpdatePathParams = dataclasses.field()
    request: shared_writabledevicetype.WritableDeviceTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceTypesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_type: Optional[shared_devicetype.DeviceType] = dataclasses.field(default=None)
    
