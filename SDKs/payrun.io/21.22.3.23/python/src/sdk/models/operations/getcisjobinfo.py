import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import jobinfo as shared_jobinfo


@dataclasses.dataclass
class GetCisJobInfoPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisJobInfoHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisJobInfoRequest:
    headers: GetCisJobInfoHeaders = dataclasses.field()
    path_params: GetCisJobInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCisJobInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    job_info: Optional[shared_jobinfo.JobInfo] = dataclasses.field(default=None)
    
