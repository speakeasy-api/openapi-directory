import dataclasses
from typing import Optional
from ..shared import gherror as shared_gherror
from ..shared import matrixresponse as shared_matrixresponse


@dataclasses.dataclass
class GetMatrixSolutionPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatrixSolutionRequest:
    path_params: GetMatrixSolutionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMatrixSolutionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    matrix_response: Optional[shared_matrixresponse.MatrixResponse] = dataclasses.field(default=None)
    
