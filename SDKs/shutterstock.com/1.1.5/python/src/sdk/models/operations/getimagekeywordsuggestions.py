import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import searchentitiesrequest as shared_searchentitiesrequest


@dataclasses.dataclass
class GetImageKeywordSuggestionsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetImageKeywordSuggestionsRequest:
    request: shared_searchentitiesrequest.SearchEntitiesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetImageKeywordSuggestionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetImageKeywordSuggestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_entities_response: Optional[Any] = dataclasses.field(default=None)
    
