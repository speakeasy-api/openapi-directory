import dataclasses
from typing import Optional
from ..shared import writabledevicebaytemplate as shared_writabledevicebaytemplate
from ..shared import devicebaytemplate as shared_devicebaytemplate


@dataclasses.dataclass
class DcimDeviceBayTemplatesCreateRequest:
    request: shared_writabledevicebaytemplate.WritableDeviceBayTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_bay_template: Optional[shared_devicebaytemplate.DeviceBayTemplate] = dataclasses.field(default=None)
    
