import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import linkcollection as shared_linkcollection


@dataclasses.dataclass
class GetAllUsersWithTagPathParams:
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllUsersWithTagHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllUsersWithTagRequest:
    headers: GetAllUsersWithTagHeaders = dataclasses.field()
    path_params: GetAllUsersWithTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllUsersWithTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    link_collection: Optional[shared_linkcollection.LinkCollection] = dataclasses.field(default=None)
    
