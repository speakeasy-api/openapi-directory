import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablevirtualchassis as shared_writablevirtualchassis
from ..shared import virtualchassis as shared_virtualchassis


@dataclasses.dataclass
class DcimVirtualChassisPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimVirtualChassisPartialUpdateRequest:
    path_params: DcimVirtualChassisPartialUpdatePathParams = dataclasses.field()
    request: shared_writablevirtualchassis.WritableVirtualChassisInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimVirtualChassisPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_chassis: Optional[shared_virtualchassis.VirtualChassis] = dataclasses.field(default=None)
    
