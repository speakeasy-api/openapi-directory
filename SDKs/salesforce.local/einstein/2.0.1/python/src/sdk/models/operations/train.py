import dataclasses
from typing import Optional
from ..shared import v2languagetrainparams as shared_v2languagetrainparams
from ..shared import security as shared_security
from ..shared import trainresponse as shared_trainresponse


@dataclasses.dataclass
class TrainRequestBody:
    algorithm: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'algorithm' }})
    dataset_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'datasetId' }})
    epochs: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'epochs' }})
    learning_rate: Optional[float] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'learningRate' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    train_params: Optional[shared_v2languagetrainparams.V2LanguageTrainParams] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'trainParams', 'json': True }})
    

@dataclasses.dataclass
class TrainSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class TrainRequest:
    security: TrainSecurity = dataclasses.field()
    request: Optional[TrainRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class TrainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    train_response: Optional[shared_trainresponse.TrainResponse] = dataclasses.field(default=None)
    
