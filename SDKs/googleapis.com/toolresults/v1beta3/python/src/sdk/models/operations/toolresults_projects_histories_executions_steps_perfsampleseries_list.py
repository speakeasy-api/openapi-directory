import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listperfsampleseriesresponse as shared_listperfsampleseriesresponse


@dataclasses.dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    history_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'historyId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    step_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stepId', 'style': 'simple', 'explode': False }})
    
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum(str, Enum):
    PERF_METRIC_TYPE_UNSPECIFIED = "perfMetricTypeUnspecified"
    MEMORY = "memory"
    CPU = "cpu"
    NETWORK = "network"
    GRAPHICS = "graphics"


@dataclasses.dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[list[ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest:
    path_params: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams = dataclasses.field()
    query_params: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams = dataclasses.field()
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_perf_sample_series_response: Optional[shared_listperfsampleseriesresponse.ListPerfSampleSeriesResponse] = dataclasses.field(default=None)
    
