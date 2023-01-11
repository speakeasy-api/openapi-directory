import dataclasses
from typing import Optional
from ..shared import paginatedgroupcoverageresult as shared_paginatedgroupcoverageresult


@dataclasses.dataclass
class GetApplicationGroupCoveragesPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationGroupCoveragesQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetApplicationGroupCoveragesRequest:
    path_params: GetApplicationGroupCoveragesPathParams = dataclasses.field()
    query_params: GetApplicationGroupCoveragesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationGroupCoveragesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_group_coverage_result: Optional[shared_paginatedgroupcoverageresult.PaginatedGroupCoverageResult] = dataclasses.field(default=None)
    
