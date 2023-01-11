import dataclasses
from typing import Optional
from ..shared import dependentresult as shared_dependentresult


@dataclasses.dataclass
class GetDependentPathParams:
    dependent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dependent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDependentRequest:
    path_params: GetDependentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDependentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dependent_result: Optional[shared_dependentresult.DependentResult] = dataclasses.field(default=None)
    
