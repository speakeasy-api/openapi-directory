import dataclasses
from typing import Optional
from ..shared import dependentcreaterequest as shared_dependentcreaterequest
from ..shared import dependentresult as shared_dependentresult


@dataclasses.dataclass
class CreateDependentPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDependentRequest:
    path_params: CreateDependentPathParams = dataclasses.field()
    request: shared_dependentcreaterequest.DependentCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDependentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dependent_result: Optional[shared_dependentresult.DependentResult] = dataclasses.field(default=None)
    
