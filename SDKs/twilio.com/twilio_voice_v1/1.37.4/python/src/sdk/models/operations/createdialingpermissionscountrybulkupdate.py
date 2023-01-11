import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_dialing_permissions_dialing_permissions_country_bulk_update as shared_voice_v1_dialing_permissions_dialing_permissions_country_bulk_update


CREATE_DIALING_PERMISSIONS_COUNTRY_BULK_UPDATE_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest:
    update_request: str = dataclasses.field(metadata={'form': { 'field_name': 'UpdateRequest' }})
    

@dataclasses.dataclass
class CreateDialingPermissionsCountryBulkUpdateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDialingPermissionsCountryBulkUpdateRequest:
    security: CreateDialingPermissionsCountryBulkUpdateSecurity = dataclasses.field()
    request: Optional[CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDialingPermissionsCountryBulkUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_dialing_permissions_dialing_permissions_country_bulk_update: Optional[shared_voice_v1_dialing_permissions_dialing_permissions_country_bulk_update.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate] = dataclasses.field(default=None)
    
