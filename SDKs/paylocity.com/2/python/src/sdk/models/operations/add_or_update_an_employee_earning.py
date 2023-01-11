import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import earning as shared_earning
from ..shared import error as shared_error


@dataclasses.dataclass
class AddOrUpdateAnEmployeeEarningPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddOrUpdateAnEmployeeEarningSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddOrUpdateAnEmployeeEarningRequest:
    path_params: AddOrUpdateAnEmployeeEarningPathParams = dataclasses.field()
    request: shared_earning.Earning = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddOrUpdateAnEmployeeEarningSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddOrUpdateAnEmployeeEarningResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
