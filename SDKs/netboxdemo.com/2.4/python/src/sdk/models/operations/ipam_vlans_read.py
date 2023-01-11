import dataclasses
from typing import Optional
from ..shared import vlan as shared_vlan


@dataclasses.dataclass
class IpamVlansReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVlansReadRequest:
    path_params: IpamVlansReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamVlansReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vlan: Optional[shared_vlan.Vlan] = dataclasses.field(default=None)
    
