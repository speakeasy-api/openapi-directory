import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import studio_v2_flow_flow_revision as shared_studio_v2_flow_flow_revision


LIST_FLOW_REVISION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class ListFlowRevisionPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFlowRevisionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFlowRevisionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListFlowRevisionListFlowRevisionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFlowRevisionListFlowRevisionResponse:
    meta: Optional[ListFlowRevisionListFlowRevisionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    revisions: Optional[list[shared_studio_v2_flow_flow_revision.StudioV2FlowFlowRevision]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    

@dataclasses.dataclass
class ListFlowRevisionRequest:
    path_params: ListFlowRevisionPathParams = dataclasses.field()
    query_params: ListFlowRevisionQueryParams = dataclasses.field()
    security: ListFlowRevisionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListFlowRevisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_flow_revision_response: Optional[ListFlowRevisionListFlowRevisionResponse] = dataclasses.field(default=None)
    
