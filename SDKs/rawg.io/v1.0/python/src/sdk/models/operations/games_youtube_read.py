import dataclasses
from typing import Optional
from ..shared import youtube as shared_youtube


@dataclasses.dataclass
class GamesYoutubeReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesYoutubeReadRequest:
    path_params: GamesYoutubeReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesYoutubeReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    youtube: Optional[shared_youtube.Youtube] = dataclasses.field(default=None)
    
