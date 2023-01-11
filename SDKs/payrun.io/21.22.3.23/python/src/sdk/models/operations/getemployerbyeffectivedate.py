import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import employer as shared_employer
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetEmployerByEffectiveDatePathParams:
    effective_date: date = dataclasses.field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployerByEffectiveDateHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployerByEffectiveDateRequest:
    headers: GetEmployerByEffectiveDateHeaders = dataclasses.field()
    path_params: GetEmployerByEffectiveDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployerByEffectiveDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employer: Optional[shared_employer.Employer] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
