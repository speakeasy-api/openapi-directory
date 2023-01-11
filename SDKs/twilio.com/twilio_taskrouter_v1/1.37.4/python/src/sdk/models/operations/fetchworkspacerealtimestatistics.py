import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_workspace_real_time_statistics as shared_taskrouter_v1_workspace_workspace_real_time_statistics


FETCH_WORKSPACE_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchWorkspaceRealTimeStatisticsPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWorkspaceRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchWorkspaceRealTimeStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWorkspaceRealTimeStatisticsRequest:
    path_params: FetchWorkspaceRealTimeStatisticsPathParams = dataclasses.field()
    query_params: FetchWorkspaceRealTimeStatisticsQueryParams = dataclasses.field()
    security: FetchWorkspaceRealTimeStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWorkspaceRealTimeStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_workspace_real_time_statistics: Optional[shared_taskrouter_v1_workspace_workspace_real_time_statistics.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics] = dataclasses.field(default=None)
    
