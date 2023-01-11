import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import response as shared_response


@dataclasses.dataclass
class DeleteCompanyTimeOffsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCompanyTimeOffsIDRequest:
    path_params: DeleteCompanyTimeOffsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCompanyTimeOffsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    
