import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetTagFromUserPathParams:
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagFromUserHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagFromUserRequest:
    headers: GetTagFromUserHeaders = dataclasses.field()
    path_params: GetTagFromUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagFromUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
