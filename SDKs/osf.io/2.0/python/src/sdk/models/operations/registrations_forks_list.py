import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsForksListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsForksListRequest:
    path_params: RegistrationsForksListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsForksListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
