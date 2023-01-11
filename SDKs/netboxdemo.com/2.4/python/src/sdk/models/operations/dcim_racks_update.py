import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablerack as shared_writablerack
from ..shared import rack as shared_rack


@dataclasses.dataclass
class DcimRacksUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRacksUpdateRequest:
    path_params: DcimRacksUpdatePathParams = dataclasses.field()
    request: shared_writablerack.WritableRackInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRacksUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack: Optional[shared_rack.Rack] = dataclasses.field(default=None)
    
