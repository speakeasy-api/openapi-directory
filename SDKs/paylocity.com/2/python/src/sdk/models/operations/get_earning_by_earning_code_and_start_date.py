import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import earning as shared_earning
from ..shared import error as shared_error


@dataclasses.dataclass
class GetEarningByEarningCodeAndStartDatePathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    earning_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'earningCode', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    start_date: str = dataclasses.field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEarningByEarningCodeAndStartDateSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEarningByEarningCodeAndStartDateRequest:
    path_params: GetEarningByEarningCodeAndStartDatePathParams = dataclasses.field()
    security: GetEarningByEarningCodeAndStartDateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEarningByEarningCodeAndStartDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    earning: Optional[shared_earning.Earning] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
