import dataclasses
from typing import Optional
from ..shared import availableip as shared_availableip


@dataclasses.dataclass
class IpamPrefixesAvailableIpsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamPrefixesAvailableIpsReadRequest:
    path_params: IpamPrefixesAvailableIpsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamPrefixesAvailableIpsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    available_ips: Optional[list[shared_availableip.AvailableIP]] = dataclasses.field(default=None)
    
