import dataclasses
from typing import Optional
from ..shared import dependenteditrequest as shared_dependenteditrequest
from ..shared import dependentresult as shared_dependentresult


@dataclasses.dataclass
class EditDependentPathParams:
    dependent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dependent_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditDependentRequest:
    path_params: EditDependentPathParams = dataclasses.field()
    request: shared_dependenteditrequest.DependentEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditDependentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dependent_result: Optional[shared_dependentresult.DependentResult] = dataclasses.field(default=None)
    
