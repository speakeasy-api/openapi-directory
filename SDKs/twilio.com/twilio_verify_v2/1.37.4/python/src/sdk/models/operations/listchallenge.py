import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import challenge_enum_list_orders_enum as shared_challenge_enum_list_orders_enum
from ..shared import challenge_enum_challenge_statuses_enum as shared_challenge_enum_challenge_statuses_enum
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity_challenge as shared_verify_v2_service_entity_challenge


LIST_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class ListChallengePathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListChallengeQueryParams:
    factor_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FactorSid', 'style': 'form', 'explode': True }})
    order: Optional[shared_challenge_enum_list_orders_enum.ChallengeEnumListOrdersEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_challenge_enum_challenge_statuses_enum.ChallengeEnumChallengeStatusesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListChallengeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListChallengeListChallengeResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListChallengeListChallengeResponse:
    challenges: Optional[list[shared_verify_v2_service_entity_challenge.VerifyV2ServiceEntityChallenge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenges') }})
    meta: Optional[ListChallengeListChallengeResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListChallengeRequest:
    path_params: ListChallengePathParams = dataclasses.field()
    query_params: ListChallengeQueryParams = dataclasses.field()
    security: ListChallengeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListChallengeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_challenge_response: Optional[ListChallengeListChallengeResponse] = dataclasses.field(default=None)
    
