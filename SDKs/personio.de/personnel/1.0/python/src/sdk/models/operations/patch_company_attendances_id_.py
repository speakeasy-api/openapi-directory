import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateattendanceperiodrequest as shared_updateattendanceperiodrequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import response as shared_response


@dataclasses.dataclass
class PatchCompanyAttendancesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchCompanyAttendancesIDRequest:
    path_params: PatchCompanyAttendancesIDPathParams = dataclasses.field()
    request: shared_updateattendanceperiodrequest.UpdateAttendancePeriodRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchCompanyAttendancesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    
