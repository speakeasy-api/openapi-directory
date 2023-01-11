import dataclasses
from typing import Optional
from ..shared import writablefrontporttemplate as shared_writablefrontporttemplate
from ..shared import frontporttemplate as shared_frontporttemplate


@dataclasses.dataclass
class DcimFrontPortTemplatesCreateRequest:
    request: shared_writablefrontporttemplate.WritableFrontPortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimFrontPortTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    front_port_template: Optional[shared_frontporttemplate.FrontPortTemplate] = dataclasses.field(default=None)
    
