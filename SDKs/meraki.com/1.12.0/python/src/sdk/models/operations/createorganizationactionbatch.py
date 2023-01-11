import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationActionBatchPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationActionBatchRequestBodyActions:
    operation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    resource: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    body: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationActionBatchRequestBody:
    actions: list[CreateOrganizationActionBatchRequestBodyActions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    confirmed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    synchronous: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronous') }})
    

@dataclasses.dataclass
class CreateOrganizationActionBatchRequest:
    path_params: CreateOrganizationActionBatchPathParams = dataclasses.field()
    request: CreateOrganizationActionBatchRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationActionBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_action_batch_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
