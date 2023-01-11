import dataclasses
from typing import Optional


@dataclasses.dataclass
class InstitutionsDetailPathParams:
    institution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InstitutionsDetailRequest:
    path_params: InstitutionsDetailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InstitutionsDetailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
