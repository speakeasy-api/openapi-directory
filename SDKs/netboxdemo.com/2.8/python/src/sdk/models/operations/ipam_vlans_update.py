import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevlan as shared_writablevlan
from ..shared import vlan as shared_vlan


@dataclasses.dataclass
class IpamVlansUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVlansUpdateRequest:
    path_params: IpamVlansUpdatePathParams = dataclasses.field()
    request: shared_writablevlan.WritableVlanInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamVlansUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vlan: Optional[shared_vlan.Vlan] = dataclasses.field(default=None)
    
