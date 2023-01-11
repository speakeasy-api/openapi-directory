import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevlangroup as shared_writablevlangroup
from ..shared import vlangroup as shared_vlangroup


@dataclasses.dataclass
class IpamVlanGroupsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVlanGroupsUpdateRequest:
    path_params: IpamVlanGroupsUpdatePathParams = dataclasses.field()
    request: shared_writablevlangroup.WritableVlanGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamVlanGroupsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vlan_group: Optional[shared_vlangroup.VlanGroup] = dataclasses.field(default=None)
    
