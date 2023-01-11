import dataclasses
from typing import Optional
from ..shared import vlangroup as shared_vlangroup


@dataclasses.dataclass
class IpamVlanGroupsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVlanGroupsReadRequest:
    path_params: IpamVlanGroupsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamVlanGroupsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vlan_group: Optional[shared_vlangroup.VlanGroup] = dataclasses.field(default=None)
    
