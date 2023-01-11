import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import progress as shared_progress


@dataclasses.dataclass
class GetProgressPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProgressQueryParams:
    raw: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProgressRequest:
    path_params: GetProgressPathParams = dataclasses.field()
    query_params: GetProgressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProgressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    progress: Optional[shared_progress.Progress] = dataclasses.field(default=None)
    
