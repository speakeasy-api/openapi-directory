import dataclasses
from typing import Optional
from ..shared import paginatedlocationresult as shared_paginatedlocationresult


@dataclasses.dataclass
class GetLocationListPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLocationListQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLocationListRequest:
    path_params: GetLocationListPathParams = dataclasses.field()
    query_params: GetLocationListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLocationListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_location_result: Optional[shared_paginatedlocationresult.PaginatedLocationResult] = dataclasses.field(default=None)
    
