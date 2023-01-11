import dataclasses
from typing import Any,Optional
from ..shared import setnotificationsrequest as shared_setnotificationsrequest


@dataclasses.dataclass
class SetNotificationsRequestPathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetNotificationsRequestRequest:
    path_params: SetNotificationsRequestPathParams = dataclasses.field()
    request: shared_setnotificationsrequest.SetNotificationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetNotificationsRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
