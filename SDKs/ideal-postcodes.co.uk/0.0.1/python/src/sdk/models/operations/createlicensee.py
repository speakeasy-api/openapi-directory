import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import createlicenseeschema as shared_createlicenseeschema
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema
from ..shared import licenseeresponseschema as shared_licenseeresponseschema


@dataclasses.dataclass
class CreateLicenseePathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateLicenseeSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class CreateLicenseeRequest:
    path_params: CreateLicenseePathParams = dataclasses.field()
    request: shared_createlicenseeschema.CreateLicenseeSchema = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLicenseeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateLicenseeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    licensee_response_schema: Optional[shared_licenseeresponseschema.LicenseeResponseSchema] = dataclasses.field(default=None)
    
