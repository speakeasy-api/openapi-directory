import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import identity as shared_identity


@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesPathParams:
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesRequest:
    path_params: PostWorkspaceIDMembersMemberIDIdentitiesPathParams = dataclasses.field()
    security: PostWorkspaceIDMembersMemberIDIdentitiesSecurity = dataclasses.field()
    request: Optional[shared_identity.Identity] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
