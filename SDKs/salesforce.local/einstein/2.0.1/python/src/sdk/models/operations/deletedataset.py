import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deletionresponse as shared_deletionresponse


@dataclasses.dataclass
class DeleteDatasetPathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDatasetSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteDatasetRequest:
    path_params: DeleteDatasetPathParams = dataclasses.field()
    security: DeleteDatasetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDatasetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deletion_response: Optional[shared_deletionresponse.DeletionResponse] = dataclasses.field(default=None)
    
