import dataclasses
from typing import Optional
from ..shared import episodesimple as shared_episodesimple


@dataclasses.dataclass
class JustListenHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JustListenRequest:
    headers: JustListenHeaders = dataclasses.field()
    

@dataclasses.dataclass
class JustListenResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    episode_simple: Optional[shared_episodesimple.EpisodeSimple] = dataclasses.field(default=None)
    
