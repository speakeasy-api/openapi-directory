import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_workflow_workflow_cumulative_statistics as shared_taskrouter_v1_workspace_workflow_workflow_cumulative_statistics


FETCH_WORKFLOW_CUMULATIVE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchWorkflowCumulativeStatisticsPathParams:
    workflow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkflowSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWorkflowCumulativeStatisticsQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchWorkflowCumulativeStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWorkflowCumulativeStatisticsRequest:
    path_params: FetchWorkflowCumulativeStatisticsPathParams = dataclasses.field()
    query_params: FetchWorkflowCumulativeStatisticsQueryParams = dataclasses.field()
    security: FetchWorkflowCumulativeStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWorkflowCumulativeStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_workflow_workflow_cumulative_statistics: Optional[shared_taskrouter_v1_workspace_workflow_workflow_cumulative_statistics.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics] = dataclasses.field(default=None)
    
