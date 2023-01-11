import dataclasses
from typing import Optional
from ..shared import movie as shared_movie


@dataclasses.dataclass
class GamesMoviesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesMoviesReadRequest:
    path_params: GamesMoviesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesMoviesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    movie: Optional[shared_movie.Movie] = dataclasses.field(default=None)
    
