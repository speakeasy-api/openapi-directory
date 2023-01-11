import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import badrequest as shared_badrequest
from ..shared import response as shared_response


@dataclasses.dataclass
class GetSolutionPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSolution404ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetSolutionRequest:
    path_params: GetSolutionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSolutionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request: Optional[shared_badrequest.BadRequest] = dataclasses.field(default=None)
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    get_solution_404_application_json_object: Optional[GetSolution404ApplicationJSON] = dataclasses.field(default=None)
    
