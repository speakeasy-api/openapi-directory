import dataclasses
from typing import Optional
from ..shared import group as shared_group


@dataclasses.dataclass
class GetGroupsQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupsRequest:
    query_params: GetGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    groups: Optional[list[shared_group.Group]] = dataclasses.field(default=None)
    
