import dataclasses
from typing import Optional
from ..shared import devicebay as shared_devicebay


@dataclasses.dataclass
class DcimDeviceBaysReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceBaysReadRequest:
    path_params: DcimDeviceBaysReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceBaysReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_bay: Optional[shared_devicebay.DeviceBay] = dataclasses.field(default=None)
    
