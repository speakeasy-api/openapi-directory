import dataclasses
from typing import Any,Optional
from ..shared import view as shared_view


@dataclasses.dataclass
class ViewsIDGetPathParams:
    view_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'view_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ViewsIDGetRequest:
    path_params: ViewsIDGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ViewsIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    view: Optional[shared_view.View] = dataclasses.field(default=None)
    
