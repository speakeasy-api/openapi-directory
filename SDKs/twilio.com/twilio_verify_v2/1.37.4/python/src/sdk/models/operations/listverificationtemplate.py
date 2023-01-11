import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import verify_v2_verification_template as shared_verify_v2_verification_template


LIST_VERIFICATION_TEMPLATE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class ListVerificationTemplateQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListVerificationTemplateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListVerificationTemplateListVerificationTemplateResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListVerificationTemplateListVerificationTemplateResponse:
    meta: Optional[ListVerificationTemplateListVerificationTemplateResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    templates: Optional[list[shared_verify_v2_verification_template.VerifyV2VerificationTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    

@dataclasses.dataclass
class ListVerificationTemplateRequest:
    query_params: ListVerificationTemplateQueryParams = dataclasses.field()
    security: ListVerificationTemplateSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListVerificationTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_verification_template_response: Optional[ListVerificationTemplateListVerificationTemplateResponse] = dataclasses.field(default=None)
    
