import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import flex_v1_flex_flow as shared_flex_v1_flex_flow


LIST_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class ListFlexFlowQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFlexFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListFlexFlowListFlexFlowResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFlexFlowListFlexFlowResponse:
    flex_flows: Optional[list[shared_flex_v1_flex_flow.FlexV1FlexFlow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flex_flows') }})
    meta: Optional[ListFlexFlowListFlexFlowResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListFlexFlowRequest:
    query_params: ListFlexFlowQueryParams = dataclasses.field()
    security: ListFlexFlowSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListFlexFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_flex_flow_response: Optional[ListFlexFlowListFlexFlowResponse] = dataclasses.field(default=None)
    
