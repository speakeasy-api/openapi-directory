import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messagesresponse as shared_messagesresponse


@dataclasses.dataclass
class MessagesFetchAllPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MessagesFetchAllQueryParams:
    contact_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contactId', 'style': 'form', 'explode': True }})
    conversation_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conversationId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MessagesFetchAllSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MessagesFetchAllRequest:
    path_params: MessagesFetchAllPathParams = dataclasses.field()
    query_params: MessagesFetchAllQueryParams = dataclasses.field()
    security: MessagesFetchAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MessagesFetchAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messages_response: Optional[shared_messagesresponse.MessagesResponse] = dataclasses.field(default=None)
    
