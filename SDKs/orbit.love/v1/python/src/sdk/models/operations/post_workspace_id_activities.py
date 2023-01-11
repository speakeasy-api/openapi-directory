import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import activity_and_identity as shared_activity_and_identity


@dataclasses.dataclass
class PostWorkspaceIDActivitiesPathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWorkspaceIDActivitiesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostWorkspaceIDActivitiesRequest:
    path_params: PostWorkspaceIDActivitiesPathParams = dataclasses.field()
    security: PostWorkspaceIDActivitiesSecurity = dataclasses.field()
    request: Optional[shared_activity_and_identity.ActivityAndIdentity] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWorkspaceIDActivitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
