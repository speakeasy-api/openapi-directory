import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import member_and_identity as shared_member_and_identity


@dataclasses.dataclass
class PostWorkspaceIDMembersPathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersRequest:
    path_params: PostWorkspaceIDMembersPathParams = dataclasses.field()
    security: PostWorkspaceIDMembersSecurity = dataclasses.field()
    request: Optional[shared_member_and_identity.MemberAndIdentity] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
