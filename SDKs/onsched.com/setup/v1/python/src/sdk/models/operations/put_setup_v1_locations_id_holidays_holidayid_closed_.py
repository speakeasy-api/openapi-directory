import dataclasses
from typing import Optional
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams:
    closed: bool = dataclasses.field(metadata={'path_param': { 'field_name': 'closed', 'style': 'simple', 'explode': False }})
    holiday_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'holidayId', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest:
    path_params: PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
