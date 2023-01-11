import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablefrontport as shared_writablefrontport
from ..shared import frontport as shared_frontport


@dataclasses.dataclass
class DcimFrontPortsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimFrontPortsPartialUpdateRequest:
    path_params: DcimFrontPortsPartialUpdatePathParams = dataclasses.field()
    request: shared_writablefrontport.WritableFrontPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimFrontPortsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    front_port: Optional[shared_frontport.FrontPort] = dataclasses.field(default=None)
    
