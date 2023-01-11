import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import member as shared_member


@dataclasses.dataclass
class PutWorkspaceIDMembersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersIDSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersIDRequest:
    path_params: PutWorkspaceIDMembersIDPathParams = dataclasses.field()
    security: PutWorkspaceIDMembersIDSecurity = dataclasses.field()
    request: Optional[shared_member.Member] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
