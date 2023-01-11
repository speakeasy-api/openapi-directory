import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trainresponse as shared_trainresponse


@dataclasses.dataclass
class GetTrainStatusAndProgress1PathParams:
    model_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrainStatusAndProgress1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTrainStatusAndProgress1Request:
    path_params: GetTrainStatusAndProgress1PathParams = dataclasses.field()
    security: GetTrainStatusAndProgress1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetTrainStatusAndProgress1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    train_response: Optional[shared_trainresponse.TrainResponse] = dataclasses.field(default=None)
    
