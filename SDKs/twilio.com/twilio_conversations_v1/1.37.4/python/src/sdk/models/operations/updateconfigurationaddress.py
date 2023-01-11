import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import configuration_address_enum_auto_creation_type_enum as shared_configuration_address_enum_auto_creation_type_enum
from ..shared import configuration_address_enum_method_enum as shared_configuration_address_enum_method_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_configuration_address as shared_conversations_v1_configuration_address


UPDATE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateConfigurationAddressPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConfigurationAddressUpdateConfigurationAddressRequest:
    auto_creation_conversation_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.ConversationServiceSid' }})
    auto_creation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.Enabled' }})
    auto_creation_studio_flow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.StudioFlowSid' }})
    auto_creation_studio_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.StudioRetryCount' }})
    auto_creation_type: Optional[shared_configuration_address_enum_auto_creation_type_enum.ConfigurationAddressEnumAutoCreationTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.Type' }})
    auto_creation_webhook_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookFilters' }})
    auto_creation_webhook_method: Optional[shared_configuration_address_enum_method_enum.ConfigurationAddressEnumMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookMethod' }})
    auto_creation_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookUrl' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateConfigurationAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConfigurationAddressRequest:
    path_params: UpdateConfigurationAddressPathParams = dataclasses.field()
    security: UpdateConfigurationAddressSecurity = dataclasses.field()
    request: Optional[UpdateConfigurationAddressUpdateConfigurationAddressRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConfigurationAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_configuration_address: Optional[shared_conversations_v1_configuration_address.ConversationsV1ConfigurationAddress] = dataclasses.field(default=None)
    
