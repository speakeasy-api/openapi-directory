import dataclasses
from typing import Optional
from ..shared import getpodcastsinbatchform as shared_getpodcastsinbatchform
from ..shared import getpodcastsinbatchresponse as shared_getpodcastsinbatchresponse


@dataclasses.dataclass
class GetPodcastsInBatchHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPodcastsInBatchRequest:
    headers: GetPodcastsInBatchHeaders = dataclasses.field()
    request: Optional[shared_getpodcastsinbatchform.GetPodcastsInBatchForm] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GetPodcastsInBatchResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_podcasts_in_batch_response: Optional[shared_getpodcastsinbatchresponse.GetPodcastsInBatchResponse] = dataclasses.field(default=None)
    
