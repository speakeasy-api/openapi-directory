import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import eventtypes_enum as shared_eventtypes_enum
from ..shared import security as shared_security
from ..shared import auditresp as shared_auditresp
from ..shared import errorforbidden as shared_errorforbidden
from ..shared import errornotfound as shared_errornotfound
from ..shared import errorunauthorized as shared_errorunauthorized


@dataclasses.dataclass
class GetEventsQueryParams:
    date_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    event_type: Optional[shared_eventtypes_enum.EventTypesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'event_type', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_text', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEventsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = dataclasses.field()
    security: GetEventsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_resp: Optional[shared_auditresp.AuditResp] = dataclasses.field(default=None)
    error_forbidden: Optional[shared_errorforbidden.ErrorForbidden] = dataclasses.field(default=None)
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    error_unauthorized: Optional[shared_errorunauthorized.ErrorUnauthorized] = dataclasses.field(default=None)
    
