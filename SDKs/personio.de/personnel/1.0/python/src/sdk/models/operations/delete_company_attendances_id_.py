import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import response as shared_response


@dataclasses.dataclass
class DeleteCompanyAttendancesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCompanyAttendancesIDRequest:
    path_params: DeleteCompanyAttendancesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCompanyAttendancesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    
