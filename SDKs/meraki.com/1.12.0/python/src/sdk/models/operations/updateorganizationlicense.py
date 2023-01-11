import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationLicensePathParams:
    license_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationLicenseRequestBody:
    device_serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSerial') }})
    

@dataclasses.dataclass
class UpdateOrganizationLicenseRequest:
    path_params: UpdateOrganizationLicensePathParams = dataclasses.field()
    request: Optional[UpdateOrganizationLicenseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationLicenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_license_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
