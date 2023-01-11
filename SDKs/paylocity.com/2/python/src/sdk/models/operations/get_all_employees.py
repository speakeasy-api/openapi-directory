import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import employeeinfo as shared_employeeinfo
from ..shared import error as shared_error


@dataclasses.dataclass
class GetAllEmployeesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllEmployeesQueryParams:
    includetotalcount: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includetotalcount', 'style': 'form', 'explode': True }})
    pagenumber: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagenumber', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllEmployeesSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllEmployeesRequest:
    path_params: GetAllEmployeesPathParams = dataclasses.field()
    query_params: GetAllEmployeesQueryParams = dataclasses.field()
    security: GetAllEmployeesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllEmployeesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee_infos: Optional[list[shared_employeeinfo.EmployeeInfo]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
