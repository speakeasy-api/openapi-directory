import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema
from ..shared import errorresponseschema as shared_errorresponseschema


@dataclasses.dataclass
class LookupUmprnPathParams:
    umprn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'umprn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LookupUmprnQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LookupUmprnSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class LookupUmprnRequest:
    path_params: LookupUmprnPathParams = dataclasses.field()
    query_params: LookupUmprnQueryParams = dataclasses.field()
    security: LookupUmprnSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LookupUmprnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    error_response_schema: Optional[shared_errorresponseschema.ErrorResponseSchema] = dataclasses.field(default=None)
    
