import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_interaction as shared_flex_v1_interaction


FETCH_INTERACTION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class FetchInteractionPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchInteractionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchInteractionRequest:
    path_params: FetchInteractionPathParams = dataclasses.field()
    security: FetchInteractionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchInteractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_interaction: Optional[shared_flex_v1_interaction.FlexV1Interaction] = dataclasses.field(default=None)
    
