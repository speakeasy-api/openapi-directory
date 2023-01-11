import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema
from ..shared import licenseeresponseschema as shared_licenseeresponseschema


@dataclasses.dataclass
class RetrieveLicenseePathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    licensee_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licensee_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveLicenseeSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class RetrieveLicenseeRequest:
    path_params: RetrieveLicenseePathParams = dataclasses.field()
    security: RetrieveLicenseeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveLicenseeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    licensee_response_schema: Optional[shared_licenseeresponseschema.LicenseeResponseSchema] = dataclasses.field(default=None)
    
