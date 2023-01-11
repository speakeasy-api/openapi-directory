import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablerackgroup as shared_writablerackgroup
from ..shared import rackgroup as shared_rackgroup


@dataclasses.dataclass
class DcimRackGroupsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackGroupsUpdateRequest:
    path_params: DcimRackGroupsUpdatePathParams = dataclasses.field()
    request: shared_writablerackgroup.WritableRackGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRackGroupsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_group: Optional[shared_rackgroup.RackGroup] = dataclasses.field(default=None)
    
