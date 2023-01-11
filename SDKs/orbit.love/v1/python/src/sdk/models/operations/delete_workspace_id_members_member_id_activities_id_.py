import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDRequest:
    path_params: DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams = dataclasses.field()
    security: DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
