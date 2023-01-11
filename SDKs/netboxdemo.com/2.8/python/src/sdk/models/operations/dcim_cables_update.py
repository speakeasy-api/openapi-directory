import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablecable as shared_writablecable
from ..shared import cable as shared_cable


@dataclasses.dataclass
class DcimCablesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimCablesUpdateRequest:
    path_params: DcimCablesUpdatePathParams = dataclasses.field()
    request: shared_writablecable.WritableCableInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimCablesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cable: Optional[shared_cable.Cable] = dataclasses.field(default=None)
    
