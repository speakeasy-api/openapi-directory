import dataclasses
from typing import Optional
from ..shared import calendarauthviewmodel as shared_calendarauthviewmodel


@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    outlook_email_address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'outlookEmailAddress', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressQueryParams:
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest:
    path_params: GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressPathParams = dataclasses.field()
    query_params: GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar_auth_view_model: Optional[shared_calendarauthviewmodel.CalendarAuthViewModel] = dataclasses.field(default=None)
    
