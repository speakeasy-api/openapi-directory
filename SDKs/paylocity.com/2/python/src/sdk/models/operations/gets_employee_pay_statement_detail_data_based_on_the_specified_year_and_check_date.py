import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import paystatementdetails as shared_paystatementdetails


@dataclasses.dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams:
    check_date: str = dataclasses.field(metadata={'path_param': { 'field_name': 'checkDate', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    year: str = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams:
    dettypes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dettypes', 'style': 'form', 'explode': True }})
    includetotalcount: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includetotalcount', 'style': 'form', 'explode': True }})
    pagenumber: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagenumber', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest:
    path_params: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams = dataclasses.field()
    query_params: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams = dataclasses.field()
    security: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    pay_statement_details: Optional[list[shared_paystatementdetails.PayStatementDetails]] = dataclasses.field(default=None)
    
