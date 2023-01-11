import dataclasses
from typing import Optional
from ..shared import vrf as shared_vrf


@dataclasses.dataclass
class IpamVrfsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVrfsReadRequest:
    path_params: IpamVrfsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamVrfsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vrf: Optional[shared_vrf.Vrf] = dataclasses.field(default=None)
    
