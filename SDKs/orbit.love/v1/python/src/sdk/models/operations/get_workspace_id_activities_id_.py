import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspaceIDActivitiesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspaceIDActivitiesIDSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspaceIDActivitiesIDRequest:
    path_params: GetWorkspaceIDActivitiesIDPathParams = dataclasses.field()
    security: GetWorkspaceIDActivitiesIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceIDActivitiesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
