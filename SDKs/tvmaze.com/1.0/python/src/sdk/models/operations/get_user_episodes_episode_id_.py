import dataclasses
from typing import Optional
from ..shared import markedepisode as shared_markedepisode


@dataclasses.dataclass
class GetUserEpisodesEpisodeIDPathParams:
    episode_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserEpisodesEpisodeIDRequest:
    path_params: GetUserEpisodesEpisodeIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserEpisodesEpisodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    marked_episode: Optional[shared_markedepisode.MarkedEpisode] = dataclasses.field(default=None)
    
