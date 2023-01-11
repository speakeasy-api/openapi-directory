import dataclasses
from typing import Optional
from ..shared import frontporttemplate as shared_frontporttemplate


@dataclasses.dataclass
class DcimFrontPortTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimFrontPortTemplatesReadRequest:
    path_params: DcimFrontPortTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimFrontPortTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    front_port_template: Optional[shared_frontporttemplate.FrontPortTemplate] = dataclasses.field(default=None)
    
