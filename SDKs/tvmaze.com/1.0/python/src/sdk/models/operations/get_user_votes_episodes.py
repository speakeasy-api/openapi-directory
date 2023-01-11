import dataclasses
from typing import Optional
from ..shared import episodevote as shared_episodevote


@dataclasses.dataclass
class GetUserVotesEpisodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    episode_votes: Optional[list[shared_episodevote.EpisodeVote]] = dataclasses.field(default=None)
    
