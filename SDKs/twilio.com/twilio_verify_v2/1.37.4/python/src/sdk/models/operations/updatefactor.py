import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import factor_enum_totp_algorithms_enum as shared_factor_enum_totp_algorithms_enum
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity_factor as shared_verify_v2_service_entity_factor


UPDATE_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class UpdateFactorPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFactorUpdateFactorRequest:
    auth_payload: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AuthPayload' }})
    config_alg: Optional[shared_factor_enum_totp_algorithms_enum.FactorEnumTotpAlgorithmsEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.Alg' }})
    config_code_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.CodeLength' }})
    config_notification_platform: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.NotificationPlatform' }})
    config_notification_token: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.NotificationToken' }})
    config_sdk_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.SdkVersion' }})
    config_skew: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.Skew' }})
    config_time_step: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Config.TimeStep' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateFactorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateFactorRequest:
    path_params: UpdateFactorPathParams = dataclasses.field()
    security: UpdateFactorSecurity = dataclasses.field()
    request: Optional[UpdateFactorUpdateFactorRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateFactorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity_factor: Optional[shared_verify_v2_service_entity_factor.VerifyV2ServiceEntityFactor] = dataclasses.field(default=None)
    
