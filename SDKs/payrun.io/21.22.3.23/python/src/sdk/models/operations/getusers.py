import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import linkcollection as shared_linkcollection


@dataclasses.dataclass
class GetUsersHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersRequest:
    headers: GetUsersHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    link_collection: Optional[shared_linkcollection.LinkCollection] = dataclasses.field(default=None)
    
