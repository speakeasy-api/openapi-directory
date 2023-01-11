import dataclasses
from typing import Optional
from ..shared import writablefrontport as shared_writablefrontport
from ..shared import frontport as shared_frontport


@dataclasses.dataclass
class DcimFrontPortsCreateRequest:
    request: shared_writablefrontport.WritableFrontPortInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimFrontPortsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    front_port: Optional[shared_frontport.FrontPort] = dataclasses.field(default=None)
    
