import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOneApplicationPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOneApplicationRequest:
    path_params: GetOneApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
