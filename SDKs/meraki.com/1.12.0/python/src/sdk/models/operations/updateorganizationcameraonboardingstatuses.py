import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationCameraOnboardingStatusesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationCameraOnboardingStatusesRequestBody:
    serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    wireless_credentials_sent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wirelessCredentialsSent') }})
    

@dataclasses.dataclass
class UpdateOrganizationCameraOnboardingStatusesRequest:
    path_params: UpdateOrganizationCameraOnboardingStatusesPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationCameraOnboardingStatusesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationCameraOnboardingStatusesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_camera_onboarding_statuses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
