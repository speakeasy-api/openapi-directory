import dataclasses
from typing import Optional
from ..shared import episodefull as shared_episodefull


@dataclasses.dataclass
class GetEpisodeByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEpisodeByIDQueryParams:
    show_transcript: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_transcript', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetEpisodeByIDHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEpisodeByIDRequest:
    headers: GetEpisodeByIDHeaders = dataclasses.field()
    path_params: GetEpisodeByIDPathParams = dataclasses.field()
    query_params: GetEpisodeByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEpisodeByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    episode_full: Optional[shared_episodefull.EpisodeFull] = dataclasses.field(default=None)
    
