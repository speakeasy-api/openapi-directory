import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class MoveOrganizationLicensesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class MoveOrganizationLicensesRequestBody:
    dest_organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destOrganizationId') }})
    license_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseIds') }})
    

@dataclasses.dataclass
class MoveOrganizationLicensesRequest:
    path_params: MoveOrganizationLicensesPathParams = dataclasses.field()
    request: MoveOrganizationLicensesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MoveOrganizationLicensesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    move_organization_licenses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
