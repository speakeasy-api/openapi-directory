import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ViewsIDDeletePathParams:
    view_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'view_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ViewsIDDeleteRequest:
    path_params: ViewsIDDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ViewsIDDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
