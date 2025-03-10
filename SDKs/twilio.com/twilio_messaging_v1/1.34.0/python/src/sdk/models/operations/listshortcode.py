from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SHORT_CODE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListShortCodePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListShortCodeQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListShortCodeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListShortCodePathParams = field(default=None)
    query_params: ListShortCodeQueryParams = field(default=None)
    security: ListShortCodeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListShortCode200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListShortCode200ApplicationJSONListShortCodeResponse:
    meta: Optional[ListShortCode200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    short_codes: Optional[List[shared.MessagingV1ServiceShortCode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_codes' }})
    

@dataclass
class ListShortCodeResponses:
    list_short_code_response: Optional[ListShortCode200ApplicationJSONListShortCodeResponse] = field(default=None)
    

@dataclass
class ListShortCodeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListShortCodeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
