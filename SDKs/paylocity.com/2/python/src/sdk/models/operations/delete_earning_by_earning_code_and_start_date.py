import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteEarningByEarningCodeAndStartDatePathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    earning_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'earningCode', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    start_date: str = dataclasses.field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEarningByEarningCodeAndStartDateSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteEarningByEarningCodeAndStartDateRequest:
    path_params: DeleteEarningByEarningCodeAndStartDatePathParams = dataclasses.field()
    security: DeleteEarningByEarningCodeAndStartDateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteEarningByEarningCodeAndStartDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
