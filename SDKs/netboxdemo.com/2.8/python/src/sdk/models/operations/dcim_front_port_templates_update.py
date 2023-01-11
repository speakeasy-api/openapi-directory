import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablefrontporttemplate as shared_writablefrontporttemplate
from ..shared import frontporttemplate as shared_frontporttemplate


@dataclasses.dataclass
class DcimFrontPortTemplatesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimFrontPortTemplatesUpdateRequest:
    path_params: DcimFrontPortTemplatesUpdatePathParams = dataclasses.field()
    request: shared_writablefrontporttemplate.WritableFrontPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimFrontPortTemplatesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    front_port_template: Optional[shared_frontporttemplate.FrontPortTemplate] = dataclasses.field(default=None)
    
