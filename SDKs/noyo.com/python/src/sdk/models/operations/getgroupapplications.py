import dataclasses
from typing import Optional
from ..shared import paginatedgroupapplicationresult as shared_paginatedgroupapplicationresult


@dataclasses.dataclass
class GetGroupApplicationsPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupApplicationsQueryParams:
    application_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application_type', 'style': 'form', 'explode': True }})
    carrier_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carrier_group_id', 'style': 'form', 'explode': True }})
    carrier_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carrier_id', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupApplicationsRequest:
    path_params: GetGroupApplicationsPathParams = dataclasses.field()
    query_params: GetGroupApplicationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupApplicationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_group_application_result: Optional[shared_paginatedgroupapplicationresult.PaginatedGroupApplicationResult] = dataclasses.field(default=None)
    
