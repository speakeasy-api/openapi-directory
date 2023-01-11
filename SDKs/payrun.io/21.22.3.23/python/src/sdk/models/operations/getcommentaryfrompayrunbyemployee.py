import dataclasses
from typing import Optional
from ..shared import commentary as shared_commentary
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetCommentaryFromPayRunByEmployeePathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayRunId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCommentaryFromPayRunByEmployeeHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCommentaryFromPayRunByEmployeeRequest:
    headers: GetCommentaryFromPayRunByEmployeeHeaders = dataclasses.field()
    path_params: GetCommentaryFromPayRunByEmployeePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommentaryFromPayRunByEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commentary: Optional[shared_commentary.Commentary] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
