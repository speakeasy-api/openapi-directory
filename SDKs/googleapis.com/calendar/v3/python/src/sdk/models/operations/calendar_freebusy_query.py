import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import freebusyrequest as shared_freebusyrequest
from ..shared import freebusyresponse as shared_freebusyresponse


@dataclasses.dataclass
class CalendarFreebusyQueryQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CalendarFreebusyQuerySecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarFreebusyQuerySecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CalendarFreebusyQuerySecurity:
    option1: Optional[CalendarFreebusyQuerySecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarFreebusyQuerySecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class CalendarFreebusyQueryRequest:
    query_params: CalendarFreebusyQueryQueryParams = dataclasses.field()
    security: CalendarFreebusyQuerySecurity = dataclasses.field()
    request: Optional[shared_freebusyrequest.FreeBusyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CalendarFreebusyQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    free_busy_response: Optional[shared_freebusyresponse.FreeBusyResponse] = dataclasses.field(default=None)
    
