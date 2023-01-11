import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsFilesListPathParams:
    provider: str = dataclasses.field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsFilesListRequest:
    path_params: RegistrationsFilesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsFilesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
