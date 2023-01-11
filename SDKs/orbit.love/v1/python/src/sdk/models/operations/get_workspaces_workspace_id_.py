import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspacesWorkspaceIDPathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspaceIDSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspaceIDRequest:
    path_params: GetWorkspacesWorkspaceIDPathParams = dataclasses.field()
    security: GetWorkspacesWorkspaceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesWorkspaceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
