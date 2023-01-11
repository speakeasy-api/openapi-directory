import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsProvidersListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsProvidersListRequest:
    path_params: RegistrationsProvidersListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsProvidersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
