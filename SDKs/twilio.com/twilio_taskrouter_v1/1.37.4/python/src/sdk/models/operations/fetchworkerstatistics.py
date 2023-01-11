import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker_worker_statistics as shared_taskrouter_v1_workspace_worker_worker_statistics


FETCH_WORKER_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchWorkerStatisticsPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWorkerStatisticsQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    task_queue_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueName', 'style': 'form', 'explode': True }})
    task_queue_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchWorkerStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWorkerStatisticsRequest:
    path_params: FetchWorkerStatisticsPathParams = dataclasses.field()
    query_params: FetchWorkerStatisticsQueryParams = dataclasses.field()
    security: FetchWorkerStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWorkerStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_worker_worker_statistics: Optional[shared_taskrouter_v1_workspace_worker_worker_statistics.TaskrouterV1WorkspaceWorkerWorkerStatistics] = dataclasses.field(default=None)
    
