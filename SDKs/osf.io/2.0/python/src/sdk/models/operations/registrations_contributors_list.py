import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsContributorsListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsContributorsListRequest:
    path_params: RegistrationsContributorsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsContributorsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
