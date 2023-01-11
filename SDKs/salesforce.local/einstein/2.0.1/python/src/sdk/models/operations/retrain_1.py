import dataclasses
from typing import Optional
from ..shared import v2visiontrainparams as shared_v2visiontrainparams
from ..shared import security as shared_security
from ..shared import trainresponse as shared_trainresponse


@dataclasses.dataclass
class Retrain1RequestBody:
    algorithm: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'algorithm' }})
    epochs: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'epochs' }})
    learning_rate: Optional[float] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'learningRate' }})
    model_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    train_params: Optional[shared_v2visiontrainparams.V2VisionTrainParams] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'trainParams', 'json': True }})
    

@dataclasses.dataclass
class Retrain1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class Retrain1Request:
    security: Retrain1Security = dataclasses.field()
    request: Optional[Retrain1RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class Retrain1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    train_response: Optional[shared_trainresponse.TrainResponse] = dataclasses.field(default=None)
    
