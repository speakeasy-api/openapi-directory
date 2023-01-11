import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import source as shared_source


@dataclasses.dataclass
class ShowSourcePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowSourceRequest:
    path_params: ShowSourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    source: Optional[shared_source.Source] = dataclasses.field(default=None)
    
