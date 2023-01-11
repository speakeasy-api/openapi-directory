import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationActionBatchPathParams:
    action_batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'actionBatchId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationActionBatchRequestBody:
    confirmed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    synchronous: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronous') }})
    

@dataclasses.dataclass
class UpdateOrganizationActionBatchRequest:
    path_params: UpdateOrganizationActionBatchPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationActionBatchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationActionBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_action_batch_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
