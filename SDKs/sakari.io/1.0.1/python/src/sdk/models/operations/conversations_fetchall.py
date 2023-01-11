import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversationsresponse as shared_conversationsresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class ConversationsFetchAllPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConversationsFetchAllQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConversationsFetchAllSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ConversationsFetchAllRequest:
    path_params: ConversationsFetchAllPathParams = dataclasses.field()
    query_params: ConversationsFetchAllQueryParams = dataclasses.field()
    security: ConversationsFetchAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConversationsFetchAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_response: Optional[shared_conversationsresponse.ConversationsResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
