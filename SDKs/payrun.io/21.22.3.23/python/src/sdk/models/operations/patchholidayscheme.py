import dataclasses
from typing import Optional
from ..shared import holidayscheme as shared_holidayscheme
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PatchHolidaySchemePathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchHolidaySchemeHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchHolidaySchemeRequest:
    headers: PatchHolidaySchemeHeaders = dataclasses.field()
    path_params: PatchHolidaySchemePathParams = dataclasses.field()
    request: shared_holidayscheme.HolidayScheme = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchHolidaySchemeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    holiday_scheme: Optional[shared_holidayscheme.HolidayScheme] = dataclasses.field(default=None)
    
