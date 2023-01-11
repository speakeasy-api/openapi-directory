import dataclasses
from typing import Optional
from enum import Enum
from ..shared import post as shared_post
from ..shared import topicsentimentoutput as shared_topicsentimentoutput

class TopicSentimentDomainEnum(str, Enum):
    ECOM = "Ecom"
    EMPLOYEE = "Employee"
    HOTEL = "Hotel"
    RESTAURANT = "Restaurant"


@dataclasses.dataclass
class TopicSentimentQueryParams:
    domain: Optional[TopicSentimentDomainEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TopicSentimentRequest:
    query_params: TopicSentimentQueryParams = dataclasses.field()
    request: Optional[list[shared_post.Post]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TopicSentimentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    topic_sentiment_response: Optional[list[shared_topicsentimentoutput.TopicSentimentOutput]] = dataclasses.field(default=None)
    
