import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RenewOrganizationLicensesSeatsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RenewOrganizationLicensesSeatsRequestBody:
    license_id_to_renew: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseIdToRenew') }})
    unused_license_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unusedLicenseId') }})
    

@dataclasses.dataclass
class RenewOrganizationLicensesSeatsRequest:
    path_params: RenewOrganizationLicensesSeatsPathParams = dataclasses.field()
    request: RenewOrganizationLicensesSeatsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RenewOrganizationLicensesSeatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    renew_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
