import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteJobByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteJobByID404ApplicationProblemPlusJSON:
    r"""DeleteJobByID404ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteJobByID409ApplicationProblemPlusJSON:
    r"""DeleteJobByID409ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    current_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_value') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class DeleteJobByIDRequest:
    path_params: DeleteJobByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteJobByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_job_by_id_401_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    delete_job_by_id_404_application_problem_plus_json_object: Optional[DeleteJobByID404ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    delete_job_by_id_409_application_problem_plus_json_object: Optional[DeleteJobByID409ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
