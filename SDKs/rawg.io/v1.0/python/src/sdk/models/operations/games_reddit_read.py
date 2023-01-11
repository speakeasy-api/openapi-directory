import dataclasses
from typing import Optional
from ..shared import reddit as shared_reddit


@dataclasses.dataclass
class GamesRedditReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesRedditReadRequest:
    path_params: GamesRedditReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesRedditReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reddit: Optional[shared_reddit.Reddit] = dataclasses.field(default=None)
    
