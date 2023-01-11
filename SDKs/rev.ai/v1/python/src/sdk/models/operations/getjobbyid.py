import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclasses.dataclass
class GetJobByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetJobByID404ApplicationProblemPlusJSON:
    r"""GetJobByID404ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class GetJobByIDRequest:
    path_params: GetJobByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJobByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_job_by_id_401_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    get_job_by_id_404_application_problem_plus_json_object: Optional[GetJobByID404ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    job: Optional[shared_job.Job] = dataclasses.field(default=None)
    
