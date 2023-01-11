import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversationresponse as shared_conversationresponse


@dataclasses.dataclass
class ConversationsFetchPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConversationsFetchSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ConversationsFetchRequest:
    path_params: ConversationsFetchPathParams = dataclasses.field()
    security: ConversationsFetchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConversationsFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversation_response: Optional[shared_conversationresponse.ConversationResponse] = dataclasses.field(default=None)
    
