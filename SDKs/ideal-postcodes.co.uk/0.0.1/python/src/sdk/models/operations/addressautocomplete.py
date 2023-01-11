import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addressautocompleteresponseschema as shared_addressautocompleteresponseschema
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema


@dataclasses.dataclass
class AddressAutocompleteQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    postcode_outward: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'postcode_outward', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AddressAutocompleteSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class AddressAutocompleteRequest:
    query_params: AddressAutocompleteQueryParams = dataclasses.field()
    security: AddressAutocompleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddressAutocompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_autocomplete_response_schema: Optional[shared_addressautocompleteresponseschema.AddressAutocompleteResponseSchema] = dataclasses.field(default=None)
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    
