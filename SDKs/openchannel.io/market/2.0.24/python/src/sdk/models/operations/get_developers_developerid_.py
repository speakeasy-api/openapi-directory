import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDevelopersDeveloperIDPathParams:
    developer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDevelopersDeveloperIDRequest:
    path_params: GetDevelopersDeveloperIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDevelopersDeveloperIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
