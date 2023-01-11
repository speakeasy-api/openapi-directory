import dataclasses
from typing import Any,Optional
from ..shared import session as shared_session


@dataclasses.dataclass
class SessionIDGetPathParams:
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionIDGetQueryParams:
    include_relationships: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SessionIDGetRequest:
    path_params: SessionIDGetPathParams = dataclasses.field()
    query_params: SessionIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    session: Optional[shared_session.Session] = dataclasses.field(default=None)
    
