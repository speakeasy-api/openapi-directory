import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateOrganizationRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class CreateOrganizationRequest:
    request: CreateOrganizationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
