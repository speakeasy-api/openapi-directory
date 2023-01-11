import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import modellist as shared_modellist


@dataclasses.dataclass
class GetTrainedModelsPathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrainedModelsQueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrainedModelsSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTrainedModelsRequest:
    path_params: GetTrainedModelsPathParams = dataclasses.field()
    query_params: GetTrainedModelsQueryParams = dataclasses.field()
    security: GetTrainedModelsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrainedModelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    model_list: Optional[shared_modellist.ModelList] = dataclasses.field(default=None)
    
