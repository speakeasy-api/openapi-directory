import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetDpsJobStatusPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDpsJobStatusHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDpsJobStatusRequest:
    headers: GetDpsJobStatusHeaders = dataclasses.field()
    path_params: GetDpsJobStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDpsJobStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
