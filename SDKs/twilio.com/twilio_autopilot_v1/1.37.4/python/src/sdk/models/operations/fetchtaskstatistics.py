import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_task_task_statistics as shared_autopilot_v1_assistant_task_task_statistics


FETCH_TASK_STATISTICS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchTaskStatisticsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTaskStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTaskStatisticsRequest:
    path_params: FetchTaskStatisticsPathParams = dataclasses.field()
    security: FetchTaskStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTaskStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_task_task_statistics: Optional[shared_autopilot_v1_assistant_task_task_statistics.AutopilotV1AssistantTaskTaskStatistics] = dataclasses.field(default=None)
    
