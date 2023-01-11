import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import linkcollection as shared_linkcollection


@dataclasses.dataclass
class GetEmployeesByEffectiveDatePathParams:
    effective_date: date = dataclasses.field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeesByEffectiveDateHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeesByEffectiveDateRequest:
    headers: GetEmployeesByEffectiveDateHeaders = dataclasses.field()
    path_params: GetEmployeesByEffectiveDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployeesByEffectiveDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    link_collection: Optional[shared_linkcollection.LinkCollection] = dataclasses.field(default=None)
    
