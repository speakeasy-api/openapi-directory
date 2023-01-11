import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import learningcurvelist as shared_learningcurvelist


@dataclasses.dataclass
class GetTrainedModelLearningCurvePathParams:
    model_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrainedModelLearningCurveQueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrainedModelLearningCurveSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTrainedModelLearningCurveRequest:
    path_params: GetTrainedModelLearningCurvePathParams = dataclasses.field()
    query_params: GetTrainedModelLearningCurveQueryParams = dataclasses.field()
    security: GetTrainedModelLearningCurveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrainedModelLearningCurveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    learning_curve_list: Optional[shared_learningcurvelist.LearningCurveList] = dataclasses.field(default=None)
    
