import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetProjectSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetProjectRequest:
    security: GetProjectSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
