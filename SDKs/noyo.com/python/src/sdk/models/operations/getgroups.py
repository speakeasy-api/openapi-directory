import dataclasses
from typing import Optional
from ..shared import paginatedgroupresult as shared_paginatedgroupresult


@dataclasses.dataclass
class GetGroupsQueryParams:
    group_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_ids', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupsRequest:
    query_params: GetGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_group_result: Optional[shared_paginatedgroupresult.PaginatedGroupResult] = dataclasses.field(default=None)
    
