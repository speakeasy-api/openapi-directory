import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CloneOrganizationPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CloneOrganizationRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class CloneOrganizationRequest:
    path_params: CloneOrganizationPathParams = dataclasses.field()
    request: CloneOrganizationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CloneOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clone_organization_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
