import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationConfigTemplatePathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationConfigTemplateRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    copy_from_network_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyFromNetworkId') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

@dataclasses.dataclass
class CreateOrganizationConfigTemplateRequest:
    path_params: CreateOrganizationConfigTemplatePathParams = dataclasses.field()
    request: CreateOrganizationConfigTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationConfigTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_config_template_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
