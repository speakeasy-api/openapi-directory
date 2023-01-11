import dataclasses
from typing import Optional
from ..shared import curatedlistfull as shared_curatedlistfull


@dataclasses.dataclass
class GetCuratedPodcastByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCuratedPodcastByIDHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCuratedPodcastByIDRequest:
    headers: GetCuratedPodcastByIDHeaders = dataclasses.field()
    path_params: GetCuratedPodcastByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCuratedPodcastByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    curated_list_full: Optional[shared_curatedlistfull.CuratedListFull] = dataclasses.field(default=None)
    
