import dataclasses
from typing import Optional
from ..shared import markedepisode as shared_markedepisode


@dataclasses.dataclass
class GetUserEpisodesQueryParams:
    show_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserEpisodesRequest:
    query_params: GetUserEpisodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserEpisodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    marked_episodes: Optional[list[shared_markedepisode.MarkedEpisode]] = dataclasses.field(default=None)
    
