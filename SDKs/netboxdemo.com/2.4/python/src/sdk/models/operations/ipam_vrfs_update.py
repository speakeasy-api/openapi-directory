import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevrf as shared_writablevrf
from ..shared import vrf as shared_vrf


@dataclasses.dataclass
class IpamVrfsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVrfsUpdateRequest:
    path_params: IpamVrfsUpdatePathParams = dataclasses.field()
    request: shared_writablevrf.WritableVrfInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamVrfsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vrf: Optional[shared_vrf.Vrf] = dataclasses.field(default=None)
    
