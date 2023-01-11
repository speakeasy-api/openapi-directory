import dataclasses
from typing import Optional
from ..shared import device as shared_device


@dataclasses.dataclass
class DcimConnectedDeviceListQueryParams:
    peer_device: str = dataclasses.field(metadata={'query_param': { 'field_name': 'peer_device', 'style': 'form', 'explode': True }})
    peer_interface: str = dataclasses.field(metadata={'query_param': { 'field_name': 'peer_interface', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DcimConnectedDeviceListRequest:
    query_params: DcimConnectedDeviceListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimConnectedDeviceListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device: Optional[shared_device.Device] = dataclasses.field(default=None)
    
