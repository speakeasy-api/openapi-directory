import dataclasses
from typing import Optional
from enum import Enum
from ..shared import availablevendorsfilter as shared_availablevendorsfilter
from ..shared import userlist as shared_userlist

class GetAvailableVendorsWithEnum(str, Enum):
    USER = "user"


@dataclasses.dataclass
class GetAvailableVendorsQueryParams:
    with_: Optional[list[GetAvailableVendorsWithEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAvailableVendorsRequest:
    query_params: GetAvailableVendorsQueryParams = dataclasses.field()
    request: Optional[shared_availablevendorsfilter.AvailableVendorsFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAvailableVendorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_list: Optional[shared_userlist.UserList] = dataclasses.field(default=None)
    
