import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import note as shared_note


@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDNotesPathParams:
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDNotesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDNotesRequest:
    path_params: PostWorkspaceIDMembersMemberIDNotesPathParams = dataclasses.field()
    security: PostWorkspaceIDMembersMemberIDNotesSecurity = dataclasses.field()
    request: Optional[shared_note.Note] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWorkspaceIDMembersMemberIDNotesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
