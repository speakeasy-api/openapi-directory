import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class CalendarEventsDeletePathParams:
    calendar_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class CalendarEventsDeleteSendUpdatesEnum(str, Enum):
    ALL = "all"
    EXTERNAL_ONLY = "externalOnly"
    NONE = "none"


@dataclasses.dataclass
class CalendarEventsDeleteQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    send_notifications: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendNotifications', 'style': 'form', 'explode': True }})
    send_updates: Optional[CalendarEventsDeleteSendUpdatesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendUpdates', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CalendarEventsDeleteSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarEventsDeleteSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarEventsDeleteSecurity:
    option1: Optional[CalendarEventsDeleteSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarEventsDeleteSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class CalendarEventsDeleteRequest:
    path_params: CalendarEventsDeletePathParams = dataclasses.field()
    query_params: CalendarEventsDeleteQueryParams = dataclasses.field()
    security: CalendarEventsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CalendarEventsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
