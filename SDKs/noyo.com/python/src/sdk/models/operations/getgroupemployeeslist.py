import dataclasses
from typing import Optional
from ..shared import paginatedemployeeresult as shared_paginatedemployeeresult


@dataclasses.dataclass
class GetGroupEmployeesListPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupEmployeesListQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupEmployeesListRequest:
    path_params: GetGroupEmployeesListPathParams = dataclasses.field()
    query_params: GetGroupEmployeesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupEmployeesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_employee_result: Optional[shared_paginatedemployeeresult.PaginatedEmployeeResult] = dataclasses.field(default=None)
    
