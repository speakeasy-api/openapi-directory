import dataclasses
from typing import Optional
from ..shared import deletepodcastresponse as shared_deletepodcastresponse


@dataclasses.dataclass
class DeletePodcastByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePodcastByIDQueryParams:
    reason: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeletePodcastByIDHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePodcastByIDRequest:
    headers: DeletePodcastByIDHeaders = dataclasses.field()
    path_params: DeletePodcastByIDPathParams = dataclasses.field()
    query_params: DeletePodcastByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePodcastByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_podcast_response: Optional[shared_deletepodcastresponse.DeletePodcastResponse] = dataclasses.field(default=None)
    
