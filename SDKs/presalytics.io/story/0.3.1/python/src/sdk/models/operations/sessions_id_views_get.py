import dataclasses
from typing import Any,Optional
from ..shared import view as shared_view


@dataclasses.dataclass
class SessionsIDViewsGetPathParams:
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionsIDViewsGetRequest:
    path_params: SessionsIDViewsGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionsIDViewsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    views: Optional[list[shared_view.View]] = dataclasses.field(default=None)
    
