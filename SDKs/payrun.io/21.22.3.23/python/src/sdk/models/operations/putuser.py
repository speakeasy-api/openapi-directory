import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import user as shared_user


@dataclasses.dataclass
class PutUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserRequest:
    headers: PutUserHeaders = dataclasses.field()
    path_params: PutUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
