import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsCitationsListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsCitationsListRequest:
    path_params: RegistrationsCitationsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsCitationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
