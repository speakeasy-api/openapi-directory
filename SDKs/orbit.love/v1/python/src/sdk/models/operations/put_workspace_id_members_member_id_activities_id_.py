import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import activity as shared_activity


@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDActivitiesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDActivitiesIDSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDActivitiesIDRequest:
    path_params: PutWorkspaceIDMembersMemberIDActivitiesIDPathParams = dataclasses.field()
    security: PutWorkspaceIDMembersMemberIDActivitiesIDSecurity = dataclasses.field()
    request: Optional[shared_activity.Activity] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDActivitiesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
