import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SessionIDDeletePathParams:
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionIDDeleteRequest:
    path_params: SessionIDDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionIDDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
