import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import learningcurvelist as shared_learningcurvelist


@dataclasses.dataclass
class GetTrainedModelLearningCurve1PathParams:
    model_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrainedModelLearningCurve1QueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrainedModelLearningCurve1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTrainedModelLearningCurve1Request:
    path_params: GetTrainedModelLearningCurve1PathParams = dataclasses.field()
    query_params: GetTrainedModelLearningCurve1QueryParams = dataclasses.field()
    security: GetTrainedModelLearningCurve1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetTrainedModelLearningCurve1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    learning_curve_list: Optional[shared_learningcurvelist.LearningCurveList] = dataclasses.field(default=None)
    
