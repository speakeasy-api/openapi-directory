import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_dialing_permissions_dialing_permissions_country_instance as shared_voice_v1_dialing_permissions_dialing_permissions_country_instance


FETCH_DIALING_PERMISSIONS_COUNTRY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class FetchDialingPermissionsCountryPathParams:
    iso_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IsoCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDialingPermissionsCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDialingPermissionsCountryRequest:
    path_params: FetchDialingPermissionsCountryPathParams = dataclasses.field()
    security: FetchDialingPermissionsCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDialingPermissionsCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_dialing_permissions_dialing_permissions_country_instance: Optional[shared_voice_v1_dialing_permissions_dialing_permissions_country_instance.VoiceV1DialingPermissionsDialingPermissionsCountryInstance] = dataclasses.field(default=None)
    
