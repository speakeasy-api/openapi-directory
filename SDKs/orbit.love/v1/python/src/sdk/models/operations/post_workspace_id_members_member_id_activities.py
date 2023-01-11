import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import activity as shared_activity
from ..shared import post_activity as shared_post_activity


@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDActivitiesPathParams:
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDActivitiesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDActivitiesRequest:
    path_params: PostWorkspaceIDMembersMemberIDActivitiesPathParams = dataclasses.field()
    security: PostWorkspaceIDMembersMemberIDActivitiesSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDActivitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
