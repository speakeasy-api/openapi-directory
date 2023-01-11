import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDNotesPathParams:
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDNotesQueryParams:
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDNotesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDNotesRequest:
    path_params: GetWorkspaceIDMembersMemberIDNotesPathParams = dataclasses.field()
    query_params: GetWorkspaceIDMembersMemberIDNotesQueryParams = dataclasses.field()
    security: GetWorkspaceIDMembersMemberIDNotesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDNotesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
