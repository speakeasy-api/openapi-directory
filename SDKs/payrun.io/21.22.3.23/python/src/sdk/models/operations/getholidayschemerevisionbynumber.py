import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import holidayscheme as shared_holidayscheme


@dataclasses.dataclass
class GetHolidaySchemeRevisionByNumberPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    revision_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHolidaySchemeRevisionByNumberHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHolidaySchemeRevisionByNumberRequest:
    headers: GetHolidaySchemeRevisionByNumberHeaders = dataclasses.field()
    path_params: GetHolidaySchemeRevisionByNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHolidaySchemeRevisionByNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    holiday_scheme: Optional[shared_holidayscheme.HolidayScheme] = dataclasses.field(default=None)
    
