import dataclasses
from typing import Optional
from enum import Enum
from ..shared import flex_flow_enum_channel_type_enum as shared_flex_flow_enum_channel_type_enum
from ..shared import flex_flow_enum_integration_type_enum as shared_flex_flow_enum_integration_type_enum
from ..shared import security as shared_security
from ..shared import flex_v1_flex_flow as shared_flex_v1_flex_flow


CREATE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateFlexFlowCreateFlexFlowRequest:
    channel_type: shared_flex_flow_enum_channel_type_enum.FlexFlowEnumChannelTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'ChannelType' }})
    chat_service_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'ChatServiceSid' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    contact_identity: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ContactIdentity' }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    integration_channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.Channel' }})
    integration_creation_on_message: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.CreationOnMessage' }})
    integration_flow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.FlowSid' }})
    integration_priority: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.Priority' }})
    integration_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.RetryCount' }})
    integration_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.Timeout' }})
    integration_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.Url' }})
    integration_workflow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.WorkflowSid' }})
    integration_workspace_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Integration.WorkspaceSid' }})
    integration_type: Optional[shared_flex_flow_enum_integration_type_enum.FlexFlowEnumIntegrationTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IntegrationType' }})
    janitor_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'JanitorEnabled' }})
    long_lived: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LongLived' }})
    

@dataclasses.dataclass
class CreateFlexFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateFlexFlowRequest:
    security: CreateFlexFlowSecurity = dataclasses.field()
    request: Optional[CreateFlexFlowCreateFlexFlowRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateFlexFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_flex_flow: Optional[shared_flex_v1_flex_flow.FlexV1FlexFlow] = dataclasses.field(default=None)
    
