import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messageresponse as shared_messageresponse


@dataclasses.dataclass
class MessagesFetchPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MessagesFetchSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MessagesFetchRequest:
    path_params: MessagesFetchPathParams = dataclasses.field()
    security: MessagesFetchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MessagesFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_response: Optional[shared_messageresponse.MessageResponse] = dataclasses.field(default=None)
    
