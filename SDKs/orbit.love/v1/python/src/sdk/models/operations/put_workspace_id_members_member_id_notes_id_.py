import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import note as shared_note


@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDNotesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDNotesIDSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDNotesIDRequest:
    path_params: PutWorkspaceIDMembersMemberIDNotesIDPathParams = dataclasses.field()
    security: PutWorkspaceIDMembersMemberIDNotesIDSecurity = dataclasses.field()
    request: Optional[shared_note.Note] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWorkspaceIDMembersMemberIDNotesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
