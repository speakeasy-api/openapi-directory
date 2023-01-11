import dataclasses
from typing import Optional
from ..shared import sentimentpredictrequest as shared_sentimentpredictrequest
from ..shared import security as shared_security
from ..shared import sentimentpredictresponse as shared_sentimentpredictresponse


@dataclasses.dataclass
class SentimentMultipartRequests:
    sentiment_predict_request: Optional[shared_sentimentpredictrequest.SentimentPredictRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sentiment_predict_request1: Optional[shared_sentimentpredictrequest.SentimentPredictRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SentimentMultipartSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class SentimentMultipartRequest:
    security: SentimentMultipartSecurity = dataclasses.field()
    request: Optional[SentimentMultipartRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class SentimentMultipartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sentiment_predict_response: Optional[shared_sentimentpredictresponse.SentimentPredictResponse] = dataclasses.field(default=None)
    
