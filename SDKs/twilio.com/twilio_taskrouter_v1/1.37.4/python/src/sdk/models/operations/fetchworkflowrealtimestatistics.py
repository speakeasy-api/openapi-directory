import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_workflow_workflow_real_time_statistics as shared_taskrouter_v1_workspace_workflow_workflow_real_time_statistics


FETCH_WORKFLOW_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchWorkflowRealTimeStatisticsPathParams:
    workflow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkflowSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWorkflowRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchWorkflowRealTimeStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWorkflowRealTimeStatisticsRequest:
    path_params: FetchWorkflowRealTimeStatisticsPathParams = dataclasses.field()
    query_params: FetchWorkflowRealTimeStatisticsQueryParams = dataclasses.field()
    security: FetchWorkflowRealTimeStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWorkflowRealTimeStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_workflow_workflow_real_time_statistics: Optional[shared_taskrouter_v1_workspace_workflow_workflow_real_time_statistics.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics] = dataclasses.field(default=None)
    
