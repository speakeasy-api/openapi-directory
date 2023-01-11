import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import channel as shared_channel

class CalendarCalendarListWatchMinAccessRoleEnum(str, Enum):
    FREE_BUSY_READER = "freeBusyReader"
    OWNER = "owner"
    READER = "reader"
    WRITER = "writer"


@dataclasses.dataclass
class CalendarCalendarListWatchQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_access_role: Optional[CalendarCalendarListWatchMinAccessRoleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minAccessRole', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    show_hidden: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showHidden', 'style': 'form', 'explode': True }})
    sync_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'syncToken', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CalendarCalendarListWatchSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarCalendarListWatchSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarCalendarListWatchSecurity:
    option1: Optional[CalendarCalendarListWatchSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarCalendarListWatchSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class CalendarCalendarListWatchRequest:
    query_params: CalendarCalendarListWatchQueryParams = dataclasses.field()
    security: CalendarCalendarListWatchSecurity = dataclasses.field()
    request: Optional[shared_channel.Channel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CalendarCalendarListWatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None)
    
