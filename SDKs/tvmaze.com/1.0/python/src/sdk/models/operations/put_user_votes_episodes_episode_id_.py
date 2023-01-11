import dataclasses
from typing import Optional
from ..shared import episodevote as shared_episodevote
from ..shared import episodevote as shared_episodevote


@dataclasses.dataclass
class PutUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserVotesEpisodesEpisodeIDRequest:
    path_params: PutUserVotesEpisodesEpisodeIDPathParams = dataclasses.field()
    request: Optional[shared_episodevote.EpisodeVoteInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUserVotesEpisodesEpisodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    episode_vote: Optional[shared_episodevote.EpisodeVote] = dataclasses.field(default=None)
    
