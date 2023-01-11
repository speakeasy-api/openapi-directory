import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import comment as shared_comment
from ..shared import error as shared_error
from ..shared import toomanyrequests as shared_toomanyrequests


@dataclasses.dataclass
class PostTracksTrackIDCommentsPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTracksTrackIDCommentsRequestBodyComment:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    timestamp: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTracksTrackIDCommentsRequestBody:
    comment: Optional[PostTracksTrackIDCommentsRequestBodyComment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

@dataclasses.dataclass
class PostTracksTrackIDCommentsSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostTracksTrackIDCommentsRequest:
    path_params: PostTracksTrackIDCommentsPathParams = dataclasses.field()
    request: PostTracksTrackIDCommentsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostTracksTrackIDCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostTracksTrackIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment: Optional[shared_comment.Comment] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    too_many_requests: Optional[shared_toomanyrequests.TooManyRequests] = dataclasses.field(default=None)
    
