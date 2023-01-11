import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googleplaydeveloperreportingv1alpha1searcherrorissuesresponse as shared_googleplaydeveloperreportingv1alpha1searcherrorissuesresponse


@dataclasses.dataclass
class PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    interval_end_time_day: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.day', 'style': 'form', 'explode': True }})
    interval_end_time_hours: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.hours', 'style': 'form', 'explode': True }})
    interval_end_time_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.minutes', 'style': 'form', 'explode': True }})
    interval_end_time_month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.month', 'style': 'form', 'explode': True }})
    interval_end_time_nanos: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.nanos', 'style': 'form', 'explode': True }})
    interval_end_time_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.seconds', 'style': 'form', 'explode': True }})
    interval_end_time_time_zone_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.timeZone.id', 'style': 'form', 'explode': True }})
    interval_end_time_time_zone_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.timeZone.version', 'style': 'form', 'explode': True }})
    interval_end_time_utc_offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.utcOffset', 'style': 'form', 'explode': True }})
    interval_end_time_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.year', 'style': 'form', 'explode': True }})
    interval_start_time_day: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.day', 'style': 'form', 'explode': True }})
    interval_start_time_hours: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.hours', 'style': 'form', 'explode': True }})
    interval_start_time_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.minutes', 'style': 'form', 'explode': True }})
    interval_start_time_month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.month', 'style': 'form', 'explode': True }})
    interval_start_time_nanos: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.nanos', 'style': 'form', 'explode': True }})
    interval_start_time_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.seconds', 'style': 'form', 'explode': True }})
    interval_start_time_time_zone_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.timeZone.id', 'style': 'form', 'explode': True }})
    interval_start_time_time_zone_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.timeZone.version', 'style': 'form', 'explode': True }})
    interval_start_time_utc_offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.utcOffset', 'style': 'form', 'explode': True }})
    interval_start_time_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.year', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PlaydeveloperreportingVitalsErrorsIssuesSearchRequest:
    path_params: PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams = dataclasses.field()
    query_params: PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PlaydeveloperreportingVitalsErrorsIssuesSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_play_developer_reporting_v1alpha1_search_error_issues_response: Optional[shared_googleplaydeveloperreportingv1alpha1searcherrorissuesresponse.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse] = dataclasses.field(default=None)
    
