import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service as shared_verify_v2_service


CREATE_SERVICE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateServiceCreateServiceRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    code_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CodeLength' }})
    custom_code_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CustomCodeEnabled' }})
    default_template_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultTemplateSid' }})
    do_not_share_warning_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DoNotShareWarningEnabled' }})
    dtmf_input_required: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DtmfInputRequired' }})
    lookup_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LookupEnabled' }})
    psd2_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Psd2Enabled' }})
    push_apn_credential_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Push.ApnCredentialSid' }})
    push_fcm_credential_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Push.FcmCredentialSid' }})
    push_include_date: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Push.IncludeDate' }})
    skip_sms_to_landlines: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SkipSmsToLandlines' }})
    totp_code_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Totp.CodeLength' }})
    totp_issuer: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Totp.Issuer' }})
    totp_skew: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Totp.Skew' }})
    totp_time_step: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Totp.TimeStep' }})
    tts_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TtsName' }})
    

@dataclasses.dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = dataclasses.field()
    request: Optional[CreateServiceCreateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service: Optional[shared_verify_v2_service.VerifyV2Service] = dataclasses.field(default=None)
    
