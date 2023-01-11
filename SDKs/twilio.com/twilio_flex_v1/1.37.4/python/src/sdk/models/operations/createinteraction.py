import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import flex_v1_interaction as shared_flex_v1_interaction


CREATE_INTERACTION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateInteractionCreateInteractionRequest:
    channel: Any = dataclasses.field(metadata={'form': { 'field_name': 'Channel' }})
    routing: Any = dataclasses.field(metadata={'form': { 'field_name': 'Routing' }})
    

@dataclasses.dataclass
class CreateInteractionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateInteractionRequest:
    security: CreateInteractionSecurity = dataclasses.field()
    request: Optional[CreateInteractionCreateInteractionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInteractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_interaction: Optional[shared_flex_v1_interaction.FlexV1Interaction] = dataclasses.field(default=None)
    
