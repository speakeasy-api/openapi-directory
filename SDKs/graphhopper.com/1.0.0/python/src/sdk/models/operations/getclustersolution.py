import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import badrequest as shared_badrequest
from ..shared import clusterresponse as shared_clusterresponse


@dataclasses.dataclass
class GetClusterSolutionPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetClusterSolution404ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetClusterSolutionRequest:
    path_params: GetClusterSolutionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClusterSolutionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request: Optional[shared_badrequest.BadRequest] = dataclasses.field(default=None)
    cluster_response: Optional[shared_clusterresponse.ClusterResponse] = dataclasses.field(default=None)
    get_cluster_solution_404_application_json_object: Optional[GetClusterSolution404ApplicationJSON] = dataclasses.field(default=None)
    
