import dataclasses
from typing import Optional
from ..shared import intentpredictrequest as shared_intentpredictrequest
from ..shared import security as shared_security
from ..shared import intentpredictresponse as shared_intentpredictresponse
from ..shared import predictionerrorresponse as shared_predictionerrorresponse


@dataclasses.dataclass
class IntentMultipartRequests:
    intent_predict_request: Optional[shared_intentpredictrequest.IntentPredictRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    intent_predict_request1: Optional[shared_intentpredictrequest.IntentPredictRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class IntentMultipartSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class IntentMultipartRequest:
    security: IntentMultipartSecurity = dataclasses.field()
    request: Optional[IntentMultipartRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class IntentMultipartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    intent_predict_response: Optional[shared_intentpredictresponse.IntentPredictResponse] = dataclasses.field(default=None)
    prediction_error_response: Optional[shared_predictionerrorresponse.PredictionErrorResponse] = dataclasses.field(default=None)
    
