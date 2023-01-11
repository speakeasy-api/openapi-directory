import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import gist_simple as shared_gist_simple
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GistsGetRevisionPathParams:
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sha', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GistsGetRevisionRequest:
    path_params: GistsGetRevisionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsGetRevisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gist_simple: Optional[shared_gist_simple.GistSimple] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
