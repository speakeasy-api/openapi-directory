import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetEmployerJobsPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployerJobsHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployerJobsRequest:
    headers: GetEmployerJobsHeaders = dataclasses.field()
    path_params: GetEmployerJobsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployerJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_employer_jobs_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
