import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsIdentifiersListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsIdentifiersListRequest:
    path_params: RegistrationsIdentifiersListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsIdentifiersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
