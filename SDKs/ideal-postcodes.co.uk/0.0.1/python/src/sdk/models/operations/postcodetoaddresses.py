import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema
from ..shared import errorresponseschema as shared_errorresponseschema
from ..shared import postcodetoaddressresponseschema as shared_postcodetoaddressresponseschema


@dataclasses.dataclass
class PostcodeToAddressesPathParams:
    postcode: str = dataclasses.field(metadata={'path_param': { 'field_name': 'postcode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostcodeToAddressesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostcodeToAddressesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostcodeToAddressesRequest:
    path_params: PostcodeToAddressesPathParams = dataclasses.field()
    query_params: PostcodeToAddressesQueryParams = dataclasses.field()
    security: PostcodeToAddressesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostcodeToAddressesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    error_response_schema: Optional[shared_errorresponseschema.ErrorResponseSchema] = dataclasses.field(default=None)
    postcode_to_address_response_schema: Optional[shared_postcodetoaddressresponseschema.PostcodeToAddressResponseSchema] = dataclasses.field(default=None)
    
