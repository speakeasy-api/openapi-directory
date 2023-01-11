import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema
from ..shared import errorresponseschema as shared_errorresponseschema


@dataclasses.dataclass
class LookupUdprnPathParams:
    udprn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'udprn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LookupUdprnQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LookupUdprnSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class LookupUdprnRequest:
    path_params: LookupUdprnPathParams = dataclasses.field()
    query_params: LookupUdprnQueryParams = dataclasses.field()
    security: LookupUdprnSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LookupUdprnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    error_response_schema: Optional[shared_errorresponseschema.ErrorResponseSchema] = dataclasses.field(default=None)
    
