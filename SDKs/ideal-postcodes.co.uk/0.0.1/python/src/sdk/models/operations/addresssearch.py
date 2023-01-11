import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addresssearchresponseschema as shared_addresssearchresponseschema
from ..shared import errorresponseschema as shared_errorresponseschema


@dataclasses.dataclass
class AddressSearchQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    postcode_outward: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'postcode_outward', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AddressSearchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class AddressSearchRequest:
    query_params: AddressSearchQueryParams = dataclasses.field()
    security: AddressSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddressSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_search_response_schema: Optional[shared_addresssearchresponseschema.AddressSearchResponseSchema] = dataclasses.field(default=None)
    error_response_schema: Optional[shared_errorresponseschema.ErrorResponseSchema] = dataclasses.field(default=None)
    
