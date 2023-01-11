import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteWorkspaceIDMembersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkspaceIDMembersIDSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteWorkspaceIDMembersIDRequest:
    path_params: DeleteWorkspaceIDMembersIDPathParams = dataclasses.field()
    security: DeleteWorkspaceIDMembersIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWorkspaceIDMembersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
