import dataclasses
from typing import Optional


@dataclasses.dataclass
class InstitutionsNodeListPathParams:
    institution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InstitutionsNodeListRequest:
    path_params: InstitutionsNodeListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InstitutionsNodeListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
