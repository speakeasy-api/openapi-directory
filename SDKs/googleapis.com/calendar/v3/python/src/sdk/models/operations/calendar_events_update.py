import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import event as shared_event


@dataclasses.dataclass
class CalendarEventsUpdatePathParams:
    calendar_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class CalendarEventsUpdateSendUpdatesEnum(str, Enum):
    ALL = "all"
    EXTERNAL_ONLY = "externalOnly"
    NONE = "none"


@dataclasses.dataclass
class CalendarEventsUpdateQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    always_include_email: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alwaysIncludeEmail', 'style': 'form', 'explode': True }})
    conference_data_version: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conferenceDataVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_attendees: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxAttendees', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    send_notifications: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendNotifications', 'style': 'form', 'explode': True }})
    send_updates: Optional[CalendarEventsUpdateSendUpdatesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendUpdates', 'style': 'form', 'explode': True }})
    supports_attachments: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supportsAttachments', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CalendarEventsUpdateSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarEventsUpdateSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarEventsUpdateSecurity:
    option1: Optional[CalendarEventsUpdateSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarEventsUpdateSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class CalendarEventsUpdateRequest:
    path_params: CalendarEventsUpdatePathParams = dataclasses.field()
    query_params: CalendarEventsUpdateQueryParams = dataclasses.field()
    security: CalendarEventsUpdateSecurity = dataclasses.field()
    request: Optional[shared_event.Event] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CalendarEventsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event: Optional[shared_event.Event] = dataclasses.field(default=None)
    
