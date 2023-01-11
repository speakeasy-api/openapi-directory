import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetOrganizationActionBatchesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationActionBatchesStatusEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclasses.dataclass
class GetOrganizationActionBatchesQueryParams:
    status: Optional[GetOrganizationActionBatchesStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationActionBatchesRequest:
    path_params: GetOrganizationActionBatchesPathParams = dataclasses.field()
    query_params: GetOrganizationActionBatchesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationActionBatchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_action_batches_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
