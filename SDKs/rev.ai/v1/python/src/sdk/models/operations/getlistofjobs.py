import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclasses.dataclass
class GetListOfJobsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfJobs400ApplicationProblemPlusJSON:
    r"""GetListOfJobs400ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class GetListOfJobsRequest:
    query_params: GetListOfJobsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListOfJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_list_of_jobs_400_application_problem_plus_json_object: Optional[GetListOfJobs400ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    get_list_of_jobs_401_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    jobs: Optional[list[shared_job.Job]] = dataclasses.field(default=None)
    
