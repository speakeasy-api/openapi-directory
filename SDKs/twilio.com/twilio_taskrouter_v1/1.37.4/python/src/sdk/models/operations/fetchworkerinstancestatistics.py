import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker_worker_instance_statistics as shared_taskrouter_v1_workspace_worker_worker_instance_statistics


FETCH_WORKER_INSTANCE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchWorkerInstanceStatisticsPathParams:
    worker_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWorkerInstanceStatisticsQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchWorkerInstanceStatisticsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWorkerInstanceStatisticsRequest:
    path_params: FetchWorkerInstanceStatisticsPathParams = dataclasses.field()
    query_params: FetchWorkerInstanceStatisticsQueryParams = dataclasses.field()
    security: FetchWorkerInstanceStatisticsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWorkerInstanceStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_worker_worker_instance_statistics: Optional[shared_taskrouter_v1_workspace_worker_worker_instance_statistics.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics] = dataclasses.field(default=None)
    
