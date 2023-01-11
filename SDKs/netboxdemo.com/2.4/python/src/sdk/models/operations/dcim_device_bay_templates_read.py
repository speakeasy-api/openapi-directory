import dataclasses
from typing import Optional
from ..shared import devicebaytemplate as shared_devicebaytemplate


@dataclasses.dataclass
class DcimDeviceBayTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesReadRequest:
    path_params: DcimDeviceBayTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_bay_template: Optional[shared_devicebaytemplate.DeviceBayTemplate] = dataclasses.field(default=None)
    
