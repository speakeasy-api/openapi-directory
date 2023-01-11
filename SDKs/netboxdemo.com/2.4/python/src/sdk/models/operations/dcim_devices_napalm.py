import dataclasses
from typing import Optional
from ..shared import device as shared_device


@dataclasses.dataclass
class DcimDevicesNapalmPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDevicesNapalmRequest:
    path_params: DcimDevicesNapalmPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDevicesNapalmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device: Optional[shared_device.Device] = dataclasses.field(default=None)
    
