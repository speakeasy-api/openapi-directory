import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import learnerresponse as shared_learnerresponse


@dataclasses.dataclass
class GetUsersUserEmailProgressPathParams:
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserEmailProgressRequest:
    path_params: GetUsersUserEmailProgressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserEmailProgressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    learner_response: Optional[shared_learnerresponse.LearnerResponse] = dataclasses.field(default=None)
    
