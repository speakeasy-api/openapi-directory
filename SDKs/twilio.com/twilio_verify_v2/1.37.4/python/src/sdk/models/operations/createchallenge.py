import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity_challenge as shared_verify_v2_service_entity_challenge


CREATE_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateChallengePathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateChallengeCreateChallengeRequest:
    factor_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'FactorSid' }})
    auth_payload: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AuthPayload' }})
    details_fields: Optional[list[Any]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Details.Fields' }})
    details_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Details.Message' }})
    expiration_date: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ExpirationDate' }})
    hidden_details: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'HiddenDetails' }})
    

@dataclasses.dataclass
class CreateChallengeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateChallengeRequest:
    path_params: CreateChallengePathParams = dataclasses.field()
    security: CreateChallengeSecurity = dataclasses.field()
    request: Optional[CreateChallengeCreateChallengeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateChallengeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity_challenge: Optional[shared_verify_v2_service_entity_challenge.VerifyV2ServiceEntityChallenge] = dataclasses.field(default=None)
    
