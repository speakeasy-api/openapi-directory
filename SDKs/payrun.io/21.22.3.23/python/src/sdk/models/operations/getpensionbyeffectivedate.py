import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import pension as shared_pension


@dataclasses.dataclass
class GetPensionByEffectiveDatePathParams:
    effective_date: date = dataclasses.field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pension_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PensionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPensionByEffectiveDateHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPensionByEffectiveDateRequest:
    headers: GetPensionByEffectiveDateHeaders = dataclasses.field()
    path_params: GetPensionByEffectiveDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPensionByEffectiveDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pension: Optional[shared_pension.Pension] = dataclasses.field(default=None)
    
