import dataclasses
from typing import Optional
from ..shared import post as shared_post
from ..shared import postpredicted as shared_postpredicted
from ..shared import validationerrors as shared_validationerrors


@dataclasses.dataclass
class EmotionQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EmotionRequest:
    query_params: EmotionQueryParams = dataclasses.field()
    request: Optional[list[shared_post.Post]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EmotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    prediction_results: Optional[list[shared_postpredicted.PostPredicted]] = dataclasses.field(default=None)
    validation_errors: Optional[shared_validationerrors.ValidationErrors] = dataclasses.field(default=None)
    
