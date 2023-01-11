import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export_day_instance as shared_bulkexports_v1_export_day_instance


FETCH_DAY_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class FetchDayPathParams:
    day: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Day', 'style': 'simple', 'explode': False }})
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDaySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDayRequest:
    path_params: FetchDayPathParams = dataclasses.field()
    security: FetchDaySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulkexports_v1_export_day_instance: Optional[shared_bulkexports_v1_export_day_instance.BulkexportsV1ExportDayInstance] = dataclasses.field(default=None)
    
