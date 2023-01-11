import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import interaction_channel_enum_status_enum as shared_interaction_channel_enum_status_enum
from ..shared import security as shared_security
from ..shared import flex_v1_interaction_interaction_channel as shared_flex_v1_interaction_interaction_channel


UPDATE_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class UpdateInteractionChannelPathParams:
    interaction_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateInteractionChannelUpdateInteractionChannelRequest:
    status: shared_interaction_channel_enum_status_enum.InteractionChannelEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    routing: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Routing' }})
    

@dataclasses.dataclass
class UpdateInteractionChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateInteractionChannelRequest:
    path_params: UpdateInteractionChannelPathParams = dataclasses.field()
    security: UpdateInteractionChannelSecurity = dataclasses.field()
    request: Optional[UpdateInteractionChannelUpdateInteractionChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateInteractionChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_interaction_interaction_channel: Optional[shared_flex_v1_interaction_interaction_channel.FlexV1InteractionInteractionChannel] = dataclasses.field(default=None)
    
