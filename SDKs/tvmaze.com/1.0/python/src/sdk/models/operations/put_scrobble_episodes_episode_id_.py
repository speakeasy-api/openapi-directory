import dataclasses
from typing import Optional
from ..shared import markedepisode as shared_markedepisode
from ..shared import markedepisode as shared_markedepisode


@dataclasses.dataclass
class PutScrobbleEpisodesEpisodeIDPathParams:
    episode_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutScrobbleEpisodesEpisodeIDRequest:
    path_params: PutScrobbleEpisodesEpisodeIDPathParams = dataclasses.field()
    request: Optional[shared_markedepisode.MarkedEpisodeInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutScrobbleEpisodesEpisodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    marked_episode: Optional[shared_markedepisode.MarkedEpisode] = dataclasses.field(default=None)
    
