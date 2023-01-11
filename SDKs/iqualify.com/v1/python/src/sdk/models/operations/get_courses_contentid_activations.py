import dataclasses
from typing import Optional
from ..shared import activationresponse as shared_activationresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCoursesContentIDActivationsPathParams:
    content_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCoursesContentIDActivationsRequest:
    path_params: GetCoursesContentIDActivationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCoursesContentIDActivationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activation_response: Optional[shared_activationresponse.ActivationResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
