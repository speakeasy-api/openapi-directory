import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import toomanyrequests as shared_toomanyrequests


@dataclasses.dataclass
class PostLikesPlaylistsPlaylistIDPathParams:
    playlist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostLikesPlaylistsPlaylistIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostLikesPlaylistsPlaylistIDRequest:
    path_params: PostLikesPlaylistsPlaylistIDPathParams = dataclasses.field()
    security: PostLikesPlaylistsPlaylistIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostLikesPlaylistsPlaylistIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    too_many_requests: Optional[shared_toomanyrequests.TooManyRequests] = dataclasses.field(default=None)
    
