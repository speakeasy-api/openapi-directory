import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import httpbody as shared_httpbody


@dataclasses.dataclass
class AdsenseAccountsReportsSavedGenerateCsvPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum(str, Enum):
    REPORTING_DATE_RANGE_UNSPECIFIED = "REPORTING_DATE_RANGE_UNSPECIFIED"
    CUSTOM = "CUSTOM"
    TODAY = "TODAY"
    YESTERDAY = "YESTERDAY"
    MONTH_TO_DATE = "MONTH_TO_DATE"
    YEAR_TO_DATE = "YEAR_TO_DATE"
    LAST_7_DAYS = "LAST_7_DAYS"
    LAST_30_DAYS = "LAST_30_DAYS"

class AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum(str, Enum):
    REPORTING_TIME_ZONE_UNSPECIFIED = "REPORTING_TIME_ZONE_UNSPECIFIED"
    ACCOUNT_TIME_ZONE = "ACCOUNT_TIME_ZONE"
    GOOGLE_TIME_ZONE = "GOOGLE_TIME_ZONE"


@dataclasses.dataclass
class AdsenseAccountsReportsSavedGenerateCsvQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currencyCode', 'style': 'form', 'explode': True }})
    date_range: Optional[AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dateRange', 'style': 'form', 'explode': True }})
    end_date_day: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate.day', 'style': 'form', 'explode': True }})
    end_date_month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate.month', 'style': 'form', 'explode': True }})
    end_date_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate.year', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    reporting_time_zone: Optional[AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reportingTimeZone', 'style': 'form', 'explode': True }})
    start_date_day: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate.day', 'style': 'form', 'explode': True }})
    start_date_month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate.month', 'style': 'form', 'explode': True }})
    start_date_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate.year', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdsenseAccountsReportsSavedGenerateCsvSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdsenseAccountsReportsSavedGenerateCsvSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdsenseAccountsReportsSavedGenerateCsvSecurity:
    option1: Optional[AdsenseAccountsReportsSavedGenerateCsvSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseAccountsReportsSavedGenerateCsvSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class AdsenseAccountsReportsSavedGenerateCsvRequest:
    path_params: AdsenseAccountsReportsSavedGenerateCsvPathParams = dataclasses.field()
    query_params: AdsenseAccountsReportsSavedGenerateCsvQueryParams = dataclasses.field()
    security: AdsenseAccountsReportsSavedGenerateCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AdsenseAccountsReportsSavedGenerateCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_body: Optional[shared_httpbody.HTTPBody] = dataclasses.field(default=None)
    
