import dataclasses
from typing import Optional
from ..shared import writablevlangroup as shared_writablevlangroup
from ..shared import vlangroup as shared_vlangroup


@dataclasses.dataclass
class IpamVlanGroupsCreateRequest:
    request: shared_writablevlangroup.WritableVlanGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamVlanGroupsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vlan_group: Optional[shared_vlangroup.VlanGroup] = dataclasses.field(default=None)
    
