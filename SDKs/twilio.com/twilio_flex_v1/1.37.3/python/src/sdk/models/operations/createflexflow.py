from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateFlexFlowCreateFlexFlowRequest:
    channel_type: shared.FlexFlowEnumChannelTypeEnum = field(metadata={'form': { 'field_name': 'ChannelType' }})
    chat_service_sid: str = field(metadata={'form': { 'field_name': 'ChatServiceSid' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    contact_identity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ContactIdentity' }})
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    integration_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.Channel' }})
    integration_creation_on_message: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Integration.CreationOnMessage' }})
    integration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.FlowSid' }})
    integration_priority: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Integration.Priority' }})
    integration_retry_count: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Integration.RetryCount' }})
    integration_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Integration.Timeout' }})
    integration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.Url' }})
    integration_workflow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.WorkflowSid' }})
    integration_workspace_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.WorkspaceSid' }})
    integration_type: Optional[shared.FlexFlowEnumIntegrationTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'IntegrationType' }})
    janitor_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'JanitorEnabled' }})
    long_lived: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LongLived' }})
    

@dataclass
class CreateFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFlexFlowRequest:
    security: CreateFlexFlowSecurity = field()
    request: Optional[CreateFlexFlowCreateFlexFlowRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateFlexFlowResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_flex_flow: Optional[shared.FlexV1FlexFlow] = field(default=None)
    
