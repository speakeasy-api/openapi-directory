import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationActionBatchPathParams:
    action_batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'actionBatchId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationActionBatchRequest:
    path_params: GetOrganizationActionBatchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationActionBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_action_batch_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
