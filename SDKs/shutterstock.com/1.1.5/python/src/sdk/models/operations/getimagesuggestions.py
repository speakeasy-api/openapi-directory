import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import suggestions as shared_suggestions


@dataclasses.dataclass
class GetImageSuggestionsQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImageSuggestionsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetImageSuggestionsRequest:
    query_params: GetImageSuggestionsQueryParams = dataclasses.field()
    security: GetImageSuggestionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetImageSuggestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    suggestions: Optional[shared_suggestions.Suggestions] = dataclasses.field(default=None)
    
