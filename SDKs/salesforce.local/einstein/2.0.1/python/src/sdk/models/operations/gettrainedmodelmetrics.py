import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import metrics as shared_metrics


@dataclasses.dataclass
class GetTrainedModelMetricsPathParams:
    model_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrainedModelMetricsSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTrainedModelMetricsRequest:
    path_params: GetTrainedModelMetricsPathParams = dataclasses.field()
    security: GetTrainedModelMetricsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrainedModelMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    metrics: Optional[shared_metrics.Metrics] = dataclasses.field(default=None)
    
