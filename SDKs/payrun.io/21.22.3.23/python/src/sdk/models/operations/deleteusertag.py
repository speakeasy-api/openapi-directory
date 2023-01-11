import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeleteUserTagPathParams:
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserTagHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserTagRequest:
    headers: DeleteUserTagHeaders = dataclasses.field()
    path_params: DeleteUserTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
