import dataclasses
from typing import Optional
from ..shared import genresingle as shared_genresingle


@dataclasses.dataclass
class GenresReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenresReadRequest:
    path_params: GenresReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GenresReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    genre_single: Optional[shared_genresingle.GenreSingle] = dataclasses.field(default=None)
    
