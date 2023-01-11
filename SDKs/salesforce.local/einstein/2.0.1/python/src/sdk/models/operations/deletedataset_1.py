import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deletionresponse as shared_deletionresponse


@dataclasses.dataclass
class DeleteDataset1PathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDataset1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteDataset1Request:
    path_params: DeleteDataset1PathParams = dataclasses.field()
    security: DeleteDataset1Security = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDataset1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deletion_response: Optional[shared_deletionresponse.DeletionResponse] = dataclasses.field(default=None)
    
