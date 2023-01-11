import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataset as shared_dataset


@dataclasses.dataclass
class GetDataset1PathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataset1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetDataset1Request:
    path_params: GetDataset1PathParams = dataclasses.field()
    security: GetDataset1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetDataset1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dataset: Optional[shared_dataset.Dataset] = dataclasses.field(default=None)
    
