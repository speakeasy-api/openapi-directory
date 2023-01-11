import dataclasses
from typing import Optional
from ..shared import getepisodesinbatchform as shared_getepisodesinbatchform
from ..shared import getepisodesinbatchresponse as shared_getepisodesinbatchresponse


@dataclasses.dataclass
class GetEpisodesInBatchHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEpisodesInBatchRequest:
    headers: GetEpisodesInBatchHeaders = dataclasses.field()
    request: shared_getepisodesinbatchform.GetEpisodesInBatchForm = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GetEpisodesInBatchResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_episodes_in_batch_response: Optional[shared_getepisodesinbatchresponse.GetEpisodesInBatchResponse] = dataclasses.field(default=None)
    
