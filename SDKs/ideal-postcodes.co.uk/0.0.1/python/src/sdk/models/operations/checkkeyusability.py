import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema
from ..shared import keyusabilityresponseschema as shared_keyusabilityresponseschema


@dataclasses.dataclass
class CheckKeyUsabilityPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckKeyUsabilityQueryParams:
    user_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CheckKeyUsabilitySecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class CheckKeyUsabilityRequest:
    path_params: CheckKeyUsabilityPathParams = dataclasses.field()
    query_params: CheckKeyUsabilityQueryParams = dataclasses.field()
    security: CheckKeyUsabilitySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CheckKeyUsabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    key_usability_response_schema: Optional[shared_keyusabilityresponseschema.KeyUsabilityResponseSchema] = dataclasses.field(default=None)
    
