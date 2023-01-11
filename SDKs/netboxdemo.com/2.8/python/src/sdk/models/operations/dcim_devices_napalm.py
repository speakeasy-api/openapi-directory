import dataclasses
from typing import Optional
from ..shared import devicenapalm as shared_devicenapalm


@dataclasses.dataclass
class DcimDevicesNapalmPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDevicesNapalmQueryParams:
    method: str = dataclasses.field(metadata={'query_param': { 'field_name': 'method', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DcimDevicesNapalmRequest:
    path_params: DcimDevicesNapalmPathParams = dataclasses.field()
    query_params: DcimDevicesNapalmQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDevicesNapalmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_napalm: Optional[shared_devicenapalm.DeviceNapalm] = dataclasses.field(default=None)
    
