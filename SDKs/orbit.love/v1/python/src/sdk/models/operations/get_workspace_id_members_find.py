import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspaceIDMembersFindPathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersFindQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    github: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'github', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    source_host: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source_host', 'style': 'form', 'explode': True }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uid', 'style': 'form', 'explode': True }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersFindSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersFindRequest:
    path_params: GetWorkspaceIDMembersFindPathParams = dataclasses.field()
    query_params: GetWorkspaceIDMembersFindQueryParams = dataclasses.field()
    security: GetWorkspaceIDMembersFindSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceIDMembersFindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
