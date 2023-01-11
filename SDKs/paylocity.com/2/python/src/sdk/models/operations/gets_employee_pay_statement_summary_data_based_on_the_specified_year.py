import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import paystatementsummary as shared_paystatementsummary


@dataclasses.dataclass
class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    year: str = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams:
    dettypes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dettypes', 'style': 'form', 'explode': True }})
    includetotalcount: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includetotalcount', 'style': 'form', 'explode': True }})
    pagenumber: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagenumber', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest:
    path_params: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams = dataclasses.field()
    query_params: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams = dataclasses.field()
    security: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    pay_statement_summaries: Optional[list[shared_paystatementsummary.PayStatementSummary]] = dataclasses.field(default=None)
    
