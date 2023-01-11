import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import performancereportlist as shared_performancereportlist


@dataclasses.dataclass
class AdexchangebuyerPerformanceReportListQueryParams:
    account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    end_date_time: str = dataclasses.field(metadata={'query_param': { 'field_name': 'endDateTime', 'style': 'form', 'explode': True }})
    start_date_time: str = dataclasses.field(metadata={'query_param': { 'field_name': 'startDateTime', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdexchangebuyerPerformanceReportListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdexchangebuyerPerformanceReportListRequest:
    query_params: AdexchangebuyerPerformanceReportListQueryParams = dataclasses.field()
    security: AdexchangebuyerPerformanceReportListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AdexchangebuyerPerformanceReportListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    performance_report_list: Optional[shared_performancereportlist.PerformanceReportList] = dataclasses.field(default=None)
    
