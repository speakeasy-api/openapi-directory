import dataclasses
from typing import Optional
from ..shared import resultresponse as shared_resultresponse


@dataclasses.dataclass
class ResultsReadPathParams:
    result_file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'result_file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResultsReadRequest:
    path_params: ResultsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ResultsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    result_response: Optional[shared_resultresponse.ResultResponse] = dataclasses.field(default=None)
    
