import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import studio_v2_flow_execution as shared_studio_v2_flow_execution


LIST_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class ListExecutionPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListExecutionQueryParams:
    date_created_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedFrom', 'style': 'form', 'explode': True }})
    date_created_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedTo', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListExecutionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListExecutionListExecutionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListExecutionListExecutionResponse:
    executions: Optional[list[shared_studio_v2_flow_execution.StudioV2FlowExecution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    meta: Optional[ListExecutionListExecutionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListExecutionRequest:
    path_params: ListExecutionPathParams = dataclasses.field()
    query_params: ListExecutionQueryParams = dataclasses.field()
    security: ListExecutionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_execution_response: Optional[ListExecutionListExecutionResponse] = dataclasses.field(default=None)
    
