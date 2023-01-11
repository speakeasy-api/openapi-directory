import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationConfigTemplatePathParams:
    config_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationConfigTemplateRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

@dataclasses.dataclass
class UpdateOrganizationConfigTemplateRequest:
    path_params: UpdateOrganizationConfigTemplatePathParams = dataclasses.field()
    request: Optional[UpdateOrganizationConfigTemplateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationConfigTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_config_template_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
