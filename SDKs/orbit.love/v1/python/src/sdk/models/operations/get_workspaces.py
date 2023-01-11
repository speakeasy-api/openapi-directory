import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspacesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspacesRequest:
    security: GetWorkspacesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
