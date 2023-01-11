import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AssignOrganizationLicensesSeatsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignOrganizationLicensesSeatsRequestBody:
    license_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseId') }})
    network_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkId') }})
    seat_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatCount') }})
    

@dataclasses.dataclass
class AssignOrganizationLicensesSeatsRequest:
    path_params: AssignOrganizationLicensesSeatsPathParams = dataclasses.field()
    request: AssignOrganizationLicensesSeatsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssignOrganizationLicensesSeatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assign_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
