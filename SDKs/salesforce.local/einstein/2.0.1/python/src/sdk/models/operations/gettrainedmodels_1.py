import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import modellist as shared_modellist


@dataclasses.dataclass
class GetTrainedModels1PathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrainedModels1QueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrainedModels1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTrainedModels1Request:
    path_params: GetTrainedModels1PathParams = dataclasses.field()
    query_params: GetTrainedModels1QueryParams = dataclasses.field()
    security: GetTrainedModels1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetTrainedModels1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    model_list: Optional[shared_modellist.ModelList] = dataclasses.field(default=None)
    
