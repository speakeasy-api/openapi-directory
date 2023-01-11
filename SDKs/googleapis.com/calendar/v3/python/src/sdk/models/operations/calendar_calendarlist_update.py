import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import calendarlistentry as shared_calendarlistentry


@dataclasses.dataclass
class CalendarCalendarListUpdatePathParams:
    calendar_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CalendarCalendarListUpdateQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    color_rgb_format: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'colorRgbFormat', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CalendarCalendarListUpdateSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarCalendarListUpdateRequest:
    path_params: CalendarCalendarListUpdatePathParams = dataclasses.field()
    query_params: CalendarCalendarListUpdateQueryParams = dataclasses.field()
    security: CalendarCalendarListUpdateSecurity = dataclasses.field()
    request: Optional[shared_calendarlistentry.CalendarListEntry] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CalendarCalendarListUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar_list_entry: Optional[shared_calendarlistentry.CalendarListEntry] = dataclasses.field(default=None)
    
