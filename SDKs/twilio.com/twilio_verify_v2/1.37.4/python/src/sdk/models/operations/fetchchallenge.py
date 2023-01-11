import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity_challenge as shared_verify_v2_service_entity_challenge


FETCH_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchChallengePathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchChallengeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchChallengeRequest:
    path_params: FetchChallengePathParams = dataclasses.field()
    security: FetchChallengeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchChallengeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity_challenge: Optional[shared_verify_v2_service_entity_challenge.VerifyV2ServiceEntityChallenge] = dataclasses.field(default=None)
    
