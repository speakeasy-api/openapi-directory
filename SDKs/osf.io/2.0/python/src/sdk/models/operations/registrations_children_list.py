import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsChildrenListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsChildrenListRequest:
    path_params: RegistrationsChildrenListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsChildrenListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
