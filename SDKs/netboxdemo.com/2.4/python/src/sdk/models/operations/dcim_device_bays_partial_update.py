import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabledevicebay as shared_writabledevicebay
from ..shared import devicebay as shared_devicebay


@dataclasses.dataclass
class DcimDeviceBaysPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceBaysPartialUpdateRequest:
    path_params: DcimDeviceBaysPartialUpdatePathParams = dataclasses.field()
    request: shared_writabledevicebay.WritableDeviceBayInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceBaysPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_bay: Optional[shared_devicebay.DeviceBay] = dataclasses.field(default=None)
    
