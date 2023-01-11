import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteRepostsPlaylistsPlaylistIDPathParams:
    playlist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRepostsPlaylistsPlaylistIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteRepostsPlaylistsPlaylistIDRequest:
    path_params: DeleteRepostsPlaylistsPlaylistIDPathParams = dataclasses.field()
    security: DeleteRepostsPlaylistsPlaylistIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRepostsPlaylistsPlaylistIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
