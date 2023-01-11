import dataclasses
from typing import Optional
from ..shared import paginateddependentresult as shared_paginateddependentresult


@dataclasses.dataclass
class GetEmployeeDependentsListPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeDependentsListQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmployeeDependentsListRequest:
    path_params: GetEmployeeDependentsListPathParams = dataclasses.field()
    query_params: GetEmployeeDependentsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployeeDependentsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_dependent_result: Optional[shared_paginateddependentresult.PaginatedDependentResult] = dataclasses.field(default=None)
    
