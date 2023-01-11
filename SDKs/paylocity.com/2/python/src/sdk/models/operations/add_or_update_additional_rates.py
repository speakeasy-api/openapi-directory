import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import additionalrate as shared_additionalrate
from ..shared import error as shared_error


@dataclasses.dataclass
class AddOrUpdateAdditionalRatesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddOrUpdateAdditionalRatesSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddOrUpdateAdditionalRatesRequest:
    path_params: AddOrUpdateAdditionalRatesPathParams = dataclasses.field()
    request: shared_additionalrate.AdditionalRate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddOrUpdateAdditionalRatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddOrUpdateAdditionalRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
