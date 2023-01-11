import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabledevicebaytemplate as shared_writabledevicebaytemplate
from ..shared import devicebaytemplate as shared_devicebaytemplate


@dataclasses.dataclass
class DcimDeviceBayTemplatesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesPartialUpdateRequest:
    path_params: DcimDeviceBayTemplatesPartialUpdatePathParams = dataclasses.field()
    request: shared_writabledevicebaytemplate.WritableDeviceBayTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_bay_template: Optional[shared_devicebaytemplate.DeviceBayTemplate] = dataclasses.field(default=None)
    
