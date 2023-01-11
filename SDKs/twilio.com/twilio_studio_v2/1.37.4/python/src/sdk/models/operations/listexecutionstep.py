import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import studio_v2_flow_execution_execution_step as shared_studio_v2_flow_execution_execution_step


LIST_EXECUTION_STEP_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class ListExecutionStepPathParams:
    execution_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListExecutionStepQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListExecutionStepSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListExecutionStepListExecutionStepResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListExecutionStepListExecutionStepResponse:
    meta: Optional[ListExecutionStepListExecutionStepResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    steps: Optional[list[shared_studio_v2_flow_execution_execution_step.StudioV2FlowExecutionExecutionStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    

@dataclasses.dataclass
class ListExecutionStepRequest:
    path_params: ListExecutionStepPathParams = dataclasses.field()
    query_params: ListExecutionStepQueryParams = dataclasses.field()
    security: ListExecutionStepSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListExecutionStepResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_execution_step_response: Optional[ListExecutionStepListExecutionStepResponse] = dataclasses.field(default=None)
    
