import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeveloperAccountsDeveloperAccountIDRequest:
    path_params: GetDeveloperAccountsDeveloperAccountIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
