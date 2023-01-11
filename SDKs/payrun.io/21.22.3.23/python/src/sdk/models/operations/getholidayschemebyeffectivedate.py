import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import holidayscheme as shared_holidayscheme


@dataclasses.dataclass
class GetHolidaySchemeByEffectiveDatePathParams:
    effective_date: date = dataclasses.field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHolidaySchemeByEffectiveDateHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHolidaySchemeByEffectiveDateRequest:
    headers: GetHolidaySchemeByEffectiveDateHeaders = dataclasses.field()
    path_params: GetHolidaySchemeByEffectiveDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHolidaySchemeByEffectiveDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    holiday_scheme: Optional[shared_holidayscheme.HolidayScheme] = dataclasses.field(default=None)
    
