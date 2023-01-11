import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_user_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
