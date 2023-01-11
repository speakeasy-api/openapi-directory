import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import new_factor_enum_totp_algorithms_enum as shared_new_factor_enum_totp_algorithms_enum
from ..shared import new_factor_enum_notification_platforms_enum as shared_new_factor_enum_notification_platforms_enum
from ..shared import new_factor_enum_factor_types_enum as shared_new_factor_enum_factor_types_enum
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity_new_factor as shared_verify_v2_service_entity_new_factor


CREATE_NEW_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateNewFactorPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateNewFactorCreateNewFactorRequest:
    factor_type: shared_new_factor_enum_factor_types_enum.NewFactorEnumFactorTypesEnum = dataclasses.field(metadata={'form': { 'field_name': 'FactorType' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    binding_alg: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Binding.Alg' }})
    binding_public_key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Binding.PublicKey' }})
    binding_secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Binding.Secret' }})
    config_alg: Optional[shared_new_factor_enum_totp_algorithms_enum.NewFactorEnumTotpAlgorithmsEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.Alg' }})
    config_app_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.AppId' }})
    config_code_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.CodeLength' }})
    config_notification_platform: Optional[shared_new_factor_enum_notification_platforms_enum.NewFactorEnumNotificationPlatformsEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.NotificationPlatform' }})
    config_notification_token: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.NotificationToken' }})
    config_sdk_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.SdkVersion' }})
    config_skew: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.Skew' }})
    config_time_step: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.TimeStep' }})
    metadata: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Metadata' }})
    

@dataclasses.dataclass
class CreateNewFactorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateNewFactorRequest:
    path_params: CreateNewFactorPathParams = dataclasses.field()
    security: CreateNewFactorSecurity = dataclasses.field()
    request: Optional[CreateNewFactorCreateNewFactorRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNewFactorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity_new_factor: Optional[shared_verify_v2_service_entity_new_factor.VerifyV2ServiceEntityNewFactor] = dataclasses.field(default=None)
    
