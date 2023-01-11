import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import metausers as shared_metausers


@dataclasses.dataclass
class GetPlaylistsPlaylistIDRepostersPathParams:
    playlist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDRepostersQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDRepostersSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDRepostersRequest:
    path_params: GetPlaylistsPlaylistIDRepostersPathParams = dataclasses.field()
    query_params: GetPlaylistsPlaylistIDRepostersQueryParams = dataclasses.field()
    security: GetPlaylistsPlaylistIDRepostersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPlaylistsPlaylistIDRepostersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    meta_users: Optional[shared_metausers.MetaUsers] = dataclasses.field(default=None)
    
