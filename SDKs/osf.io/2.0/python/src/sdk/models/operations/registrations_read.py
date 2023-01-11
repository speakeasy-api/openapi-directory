import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsReadPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsReadRequest:
    path_params: RegistrationsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
