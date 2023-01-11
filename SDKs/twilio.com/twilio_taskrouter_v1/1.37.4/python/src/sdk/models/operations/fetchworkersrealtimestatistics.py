import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker_workers_real_time_statistics as shared_taskrouter_v1_workspace_worker_workers_real_time_statistics


FETCH_WORKERS_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchWorkersRealTimeStatisticsPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWorkersRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchWorkersRealTimeStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWorkersRealTimeStatisticsRequest:
    path_params: FetchWorkersRealTimeStatisticsPathParams = dataclasses.field()
    query_params: FetchWorkersRealTimeStatisticsQueryParams = dataclasses.field()
    security: FetchWorkersRealTimeStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWorkersRealTimeStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_worker_workers_real_time_statistics: Optional[shared_taskrouter_v1_workspace_worker_workers_real_time_statistics.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics] = dataclasses.field(default=None)
    
