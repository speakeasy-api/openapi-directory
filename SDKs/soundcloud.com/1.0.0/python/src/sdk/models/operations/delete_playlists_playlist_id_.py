import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeletePlaylistsPlaylistIDPathParams:
    playlist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePlaylistsPlaylistIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DeletePlaylistsPlaylistIDRequest:
    path_params: DeletePlaylistsPlaylistIDPathParams = dataclasses.field()
    security: DeletePlaylistsPlaylistIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeletePlaylistsPlaylistIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
