import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createtimeoffperiodresponse as shared_createtimeoffperiodresponse
from ..shared import createtimeoffperiodrequest as shared_createtimeoffperiodrequest
from ..shared import errorresponse as shared_errorresponse


@dataclass_json
@dataclasses.dataclass
class PostCompanyTimeOffs201ApplicationJSON:
    data: Optional[shared_createtimeoffperiodresponse.CreateTimeOffPeriodResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class PostCompanyTimeOffsRequest:
    request: shared_createtimeoffperiodrequest.CreateTimeOffPeriodRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompanyTimeOffsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    post_company_time_offs_201_application_json_object: Optional[PostCompanyTimeOffs201ApplicationJSON] = dataclasses.field(default=None)
    
