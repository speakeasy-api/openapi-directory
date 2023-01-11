import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import show as shared_show


@dataclasses.dataclass
class GetShowsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShowsIDQueryParams:
    expand: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShowsIDRequest:
    path_params: GetShowsIDPathParams = dataclasses.field()
    query_params: GetShowsIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetShowsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    show: Optional[shared_show.Show] = dataclasses.field(default=None)
    
