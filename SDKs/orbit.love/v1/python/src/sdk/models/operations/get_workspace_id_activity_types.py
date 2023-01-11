import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspaceIDActivityTypesPathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspaceIDActivityTypesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspaceIDActivityTypesRequest:
    path_params: GetWorkspaceIDActivityTypesPathParams = dataclasses.field()
    security: GetWorkspaceIDActivityTypesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceIDActivityTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
