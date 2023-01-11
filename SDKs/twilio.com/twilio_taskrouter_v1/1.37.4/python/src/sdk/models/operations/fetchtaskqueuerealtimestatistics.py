import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_queue_task_queue_real_time_statistics as shared_taskrouter_v1_workspace_task_queue_task_queue_real_time_statistics


FETCH_TASK_QUEUE_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchTaskQueueRealTimeStatisticsPathParams:
    task_queue_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskQueueSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTaskQueueRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchTaskQueueRealTimeStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTaskQueueRealTimeStatisticsRequest:
    path_params: FetchTaskQueueRealTimeStatisticsPathParams = dataclasses.field()
    query_params: FetchTaskQueueRealTimeStatisticsQueryParams = dataclasses.field()
    security: FetchTaskQueueRealTimeStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTaskQueueRealTimeStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task_queue_task_queue_real_time_statistics: Optional[shared_taskrouter_v1_workspace_task_queue_task_queue_real_time_statistics.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics] = dataclasses.field(default=None)
    
