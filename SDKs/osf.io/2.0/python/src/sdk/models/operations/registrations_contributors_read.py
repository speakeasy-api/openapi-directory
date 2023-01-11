import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsContributorsReadPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsContributorsReadRequest:
    path_params: RegistrationsContributorsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsContributorsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
