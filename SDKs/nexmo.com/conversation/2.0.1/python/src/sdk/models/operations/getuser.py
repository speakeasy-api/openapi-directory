import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserRequest:
    path_params: GetUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_user_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
