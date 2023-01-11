import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationRequestBodyAPI:
    r"""UpdateOrganizationRequestBodyAPI
    API-specific settings
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationRequestBody:
    api: Optional[UpdateOrganizationRequestBodyAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateOrganizationRequest:
    path_params: UpdateOrganizationPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
