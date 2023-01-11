import dataclasses
from typing import Optional
from ..shared import paginatedgroupapplicationresult as shared_paginatedgroupapplicationresult


@dataclasses.dataclass
class GetAllApplicationsQueryParams:
    application_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application_type', 'style': 'form', 'explode': True }})
    carrier_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carrier_id', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllApplicationsRequest:
    query_params: GetAllApplicationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllApplicationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_group_application_result: Optional[shared_paginatedgroupapplicationresult.PaginatedGroupApplicationResult] = dataclasses.field(default=None)
    
