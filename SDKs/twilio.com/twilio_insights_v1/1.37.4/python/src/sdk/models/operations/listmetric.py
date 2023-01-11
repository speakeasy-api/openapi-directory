import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metric_enum_stream_direction_enum as shared_metric_enum_stream_direction_enum
from ..shared import metric_enum_twilio_edge_enum as shared_metric_enum_twilio_edge_enum
from ..shared import security as shared_security
from ..shared import insights_v1_call_metric as shared_insights_v1_call_metric


LIST_METRIC_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class ListMetricPathParams:
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListMetricQueryParams:
    direction: Optional[shared_metric_enum_stream_direction_enum.MetricEnumStreamDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    edge: Optional[shared_metric_enum_twilio_edge_enum.MetricEnumTwilioEdgeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Edge', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMetricSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListMetricListMetricResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListMetricListMetricResponse:
    meta: Optional[ListMetricListMetricResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    metrics: Optional[list[shared_insights_v1_call_metric.InsightsV1CallMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    

@dataclasses.dataclass
class ListMetricRequest:
    path_params: ListMetricPathParams = dataclasses.field()
    query_params: ListMetricQueryParams = dataclasses.field()
    security: ListMetricSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListMetricResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_metric_response: Optional[ListMetricListMetricResponse] = dataclasses.field(default=None)
    
