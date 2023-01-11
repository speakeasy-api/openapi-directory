import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import streams as shared_streams


@dataclasses.dataclass
class GetTracksTrackIDStreamsPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracksTrackIDStreamsQueryParams:
    secret_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'secret_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracksTrackIDStreamsSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetTracksTrackIDStreamsRequest:
    path_params: GetTracksTrackIDStreamsPathParams = dataclasses.field()
    query_params: GetTracksTrackIDStreamsQueryParams = dataclasses.field()
    security: GetTracksTrackIDStreamsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracksTrackIDStreamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    streams: Optional[shared_streams.Streams] = dataclasses.field(default=None)
    
