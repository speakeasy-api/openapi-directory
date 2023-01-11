import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_recording_settings as shared_video_v1_recording_settings


CREATE_RECORDING_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class CreateRecordingSettingsCreateRecordingSettingsRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    aws_credentials_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AwsCredentialsSid' }})
    aws_s3_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AwsS3Url' }})
    aws_storage_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AwsStorageEnabled' }})
    encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EncryptionEnabled' }})
    encryption_key_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EncryptionKeySid' }})
    

@dataclasses.dataclass
class CreateRecordingSettingsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateRecordingSettingsRequest:
    security: CreateRecordingSettingsSecurity = dataclasses.field()
    request: Optional[CreateRecordingSettingsCreateRecordingSettingsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateRecordingSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_recording_settings: Optional[shared_video_v1_recording_settings.VideoV1RecordingSettings] = dataclasses.field(default=None)
    
