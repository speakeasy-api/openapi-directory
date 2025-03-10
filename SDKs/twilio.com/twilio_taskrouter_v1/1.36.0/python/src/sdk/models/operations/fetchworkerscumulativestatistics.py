from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_WORKERS_CUMULATIVE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkersCumulativeStatisticsPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkersCumulativeStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkersCumulativeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkersCumulativeStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkersCumulativeStatisticsPathParams = field(default=None)
    query_params: FetchWorkersCumulativeStatisticsQueryParams = field(default=None)
    security: FetchWorkersCumulativeStatisticsSecurity = field(default=None)
    

@dataclass
class FetchWorkersCumulativeStatisticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_worker_workers_cumulative_statistics: Optional[shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics] = field(default=None)
    
