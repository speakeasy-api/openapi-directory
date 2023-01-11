import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointTransferAUsersPlaybackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointTransferAUsersPlaybackRequestBody:
    device_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_ids') }})
    play: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play') }})
    

@dataclasses.dataclass
class EndpointTransferAUsersPlaybackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointTransferAUsersPlaybackRequest:
    headers: EndpointTransferAUsersPlaybackHeaders = dataclasses.field()
    request: EndpointTransferAUsersPlaybackRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointTransferAUsersPlaybackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointTransferAUsersPlaybackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
