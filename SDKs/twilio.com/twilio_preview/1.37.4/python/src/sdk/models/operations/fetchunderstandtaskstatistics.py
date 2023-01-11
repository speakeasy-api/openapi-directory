import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task_task_statistics as shared_preview_understand_assistant_task_task_statistics


FETCH_UNDERSTAND_TASK_STATISTICS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandTaskStatisticsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandTaskStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandTaskStatisticsRequest:
    path_params: FetchUnderstandTaskStatisticsPathParams = dataclasses.field()
    security: FetchUnderstandTaskStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandTaskStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task_task_statistics: Optional[shared_preview_understand_assistant_task_task_statistics.PreviewUnderstandAssistantTaskTaskStatistics] = dataclasses.field(default=None)
    
