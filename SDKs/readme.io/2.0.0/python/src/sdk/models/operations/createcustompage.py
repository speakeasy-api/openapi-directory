import dataclasses
from ..shared import security as shared_security
from ..shared import custompage as shared_custompage


@dataclasses.dataclass
class CreateCustomPageSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCustomPageRequest:
    request: shared_custompage.CustomPage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateCustomPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
