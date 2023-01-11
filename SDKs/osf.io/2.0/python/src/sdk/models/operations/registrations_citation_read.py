import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsCitationReadPathParams:
    citation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'citation_id', 'style': 'simple', 'explode': False }})
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsCitationReadRequest:
    path_params: RegistrationsCitationReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsCitationReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
