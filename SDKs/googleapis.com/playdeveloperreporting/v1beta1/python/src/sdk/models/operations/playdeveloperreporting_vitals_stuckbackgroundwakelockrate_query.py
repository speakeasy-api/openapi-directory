import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googleplaydeveloperreportingv1beta1querystuckbackgroundwakelockratemetricsetrequest as shared_googleplaydeveloperreportingv1beta1querystuckbackgroundwakelockratemetricsetrequest
from ..shared import googleplaydeveloperreportingv1beta1querystuckbackgroundwakelockratemetricsetresponse as shared_googleplaydeveloperreportingv1beta1querystuckbackgroundwakelockratemetricsetresponse


@dataclasses.dataclass
class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest:
    path_params: PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams = dataclasses.field()
    query_params: PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams = dataclasses.field()
    request: Optional[shared_googleplaydeveloperreportingv1beta1querystuckbackgroundwakelockratemetricsetrequest.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_play_developer_reporting_v1beta1_query_stuck_background_wakelock_rate_metric_set_response: Optional[shared_googleplaydeveloperreportingv1beta1querystuckbackgroundwakelockratemetricsetresponse.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse] = dataclasses.field(default=None)
    
