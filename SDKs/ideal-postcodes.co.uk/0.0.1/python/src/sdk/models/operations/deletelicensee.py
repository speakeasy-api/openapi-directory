import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import addresslookupresponseschema as shared_addresslookupresponseschema
from ..shared import deletelicenseeresponseschema as shared_deletelicenseeresponseschema


@dataclasses.dataclass
class DeleteLicenseePathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    licensee_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licensee_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLicenseeSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DeleteLicenseeRequest:
    path_params: DeleteLicenseePathParams = dataclasses.field()
    security: DeleteLicenseeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLicenseeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    address_lookup_response_schema: Optional[shared_addresslookupresponseschema.AddressLookupResponseSchema] = dataclasses.field(default=None)
    delete_licensee_response_schema: Optional[shared_deletelicenseeresponseschema.DeleteLicenseeResponseSchema] = dataclasses.field(default=None)
    
