import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import userslist as shared_userslist


@dataclasses.dataclass
class GetTracksTrackIDFavoritersPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracksTrackIDFavoritersQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracksTrackIDFavoritersSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetTracksTrackIDFavoritersRequest:
    path_params: GetTracksTrackIDFavoritersPathParams = dataclasses.field()
    query_params: GetTracksTrackIDFavoritersQueryParams = dataclasses.field()
    security: GetTracksTrackIDFavoritersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracksTrackIDFavoritersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    users_list: Optional[list[shared_userslist.UsersList]] = dataclasses.field(default=None)
    
