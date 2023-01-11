import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import metausers as shared_metausers


@dataclasses.dataclass
class GetTracksTrackIDRepostersPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracksTrackIDRepostersQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracksTrackIDRepostersSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetTracksTrackIDRepostersRequest:
    path_params: GetTracksTrackIDRepostersPathParams = dataclasses.field()
    query_params: GetTracksTrackIDRepostersQueryParams = dataclasses.field()
    security: GetTracksTrackIDRepostersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracksTrackIDRepostersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    meta_users: Optional[shared_metausers.MetaUsers] = dataclasses.field(default=None)
    
