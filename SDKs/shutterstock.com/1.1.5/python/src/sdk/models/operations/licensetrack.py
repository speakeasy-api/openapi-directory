import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import licenseaudiorequest as shared_licenseaudiorequest

class LicenseTrackLicenseEnum(str, Enum):
    AUDIO_PLATFORM = "audio_platform"
    PREMIER_MUSIC_BASIC = "premier_music_basic"
    PREMIER_MUSIC_EXTENDED = "premier_music_extended"
    PREMIER_MUSIC_PRO = "premier_music_pro"
    PREMIER_MUSIC_COMP = "premier_music_comp"


@dataclasses.dataclass
class LicenseTrackQueryParams:
    license: Optional[LicenseTrackLicenseEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    search_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LicenseTrackSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LicenseTrackRequest:
    query_params: LicenseTrackQueryParams = dataclasses.field()
    request: shared_licenseaudiorequest.LicenseAudioRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: LicenseTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LicenseTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_audio_result_data_list: Optional[Any] = dataclasses.field(default=None)
    
