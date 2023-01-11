import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sendmessagesrequest as shared_sendmessagesrequest
from ..shared import sendmessagesresponse as shared_sendmessagesresponse


@dataclasses.dataclass
class MessagesSendPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MessagesSendSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MessagesSendRequest:
    path_params: MessagesSendPathParams = dataclasses.field()
    security: MessagesSendSecurity = dataclasses.field()
    request: Optional[shared_sendmessagesrequest.SendMessagesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MessagesSendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_messages_response: Optional[shared_sendmessagesresponse.SendMessagesResponse] = dataclasses.field(default=None)
    
