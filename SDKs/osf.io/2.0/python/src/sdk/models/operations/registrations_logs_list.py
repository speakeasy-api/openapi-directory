import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsLogsListPathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsLogsListRequest:
    path_params: RegistrationsLogsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsLogsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
