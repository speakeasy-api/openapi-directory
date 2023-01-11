import dataclasses
from typing import Optional
from ..shared import calendarauthviewmodel as shared_calendarauthviewmodel


@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressPathParams:
    google_email_address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'googleEmailAddress', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressQueryParams:
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest:
    path_params: GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressPathParams = dataclasses.field()
    query_params: GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar_auth_view_model: Optional[shared_calendarauthviewmodel.CalendarAuthViewModel] = dataclasses.field(default=None)
    
