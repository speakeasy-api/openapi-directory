import dataclasses
from typing import Optional
from ..shared import aspsp as shared_aspsp


@dataclasses.dataclass
class RetrieveDetailsAboutSpecificAspspPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveDetailsAboutSpecificAspspRequest:
    path_params: RetrieveDetailsAboutSpecificAspspPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveDetailsAboutSpecificAspspResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aspsp: Optional[shared_aspsp.Aspsp] = dataclasses.field(default=None)
    
