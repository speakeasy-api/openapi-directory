import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsCommentsListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsCommentsListRequest:
    path_params: RegistrationsCommentsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsCommentsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
