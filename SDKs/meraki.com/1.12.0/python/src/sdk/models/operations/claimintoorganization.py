import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ClaimIntoOrganizationPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class ClaimIntoOrganizationRequestBodyLicensesModeEnum(str, Enum):
    ADD_DEVICES = "addDevices"
    RENEW = "renew"


@dataclass_json
@dataclasses.dataclass
class ClaimIntoOrganizationRequestBodyLicenses:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    mode: Optional[ClaimIntoOrganizationRequestBodyLicensesModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclasses.dataclass
class ClaimIntoOrganizationRequestBody:
    licenses: Optional[list[ClaimIntoOrganizationRequestBodyLicenses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    orders: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    

@dataclasses.dataclass
class ClaimIntoOrganizationRequest:
    path_params: ClaimIntoOrganizationPathParams = dataclasses.field()
    request: Optional[ClaimIntoOrganizationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ClaimIntoOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    claim_into_organization_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
