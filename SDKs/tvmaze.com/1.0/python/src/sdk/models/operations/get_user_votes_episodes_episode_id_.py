import dataclasses
from typing import Optional
from ..shared import episodevote as shared_episodevote


@dataclasses.dataclass
class GetUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserVotesEpisodesEpisodeIDRequest:
    path_params: GetUserVotesEpisodesEpisodeIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserVotesEpisodesEpisodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    episode_vote: Optional[shared_episodevote.EpisodeVote] = dataclasses.field(default=None)
    
