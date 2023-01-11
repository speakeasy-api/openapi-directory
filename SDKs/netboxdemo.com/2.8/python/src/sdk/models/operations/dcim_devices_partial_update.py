import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabledevicewithconfigcontext as shared_writabledevicewithconfigcontext
from ..shared import devicewithconfigcontext as shared_devicewithconfigcontext


@dataclasses.dataclass
class DcimDevicesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDevicesPartialUpdateRequest:
    path_params: DcimDevicesPartialUpdatePathParams = dataclasses.field()
    request: shared_writabledevicewithconfigcontext.WritableDeviceWithConfigContextInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDevicesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_with_config_context: Optional[shared_devicewithconfigcontext.DeviceWithConfigContext] = dataclasses.field(default=None)
    
