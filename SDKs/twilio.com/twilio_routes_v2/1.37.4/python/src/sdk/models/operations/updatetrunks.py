import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import routes_v2_trunks as shared_routes_v2_trunks


UPDATE_TRUNKS_SERVERS = [
	"https://routes.twilio.com",
]


@dataclasses.dataclass
class UpdateTrunksPathParams:
    sip_trunk_domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SipTrunkDomain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTrunksUpdateTrunksRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    voice_region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceRegion' }})
    

@dataclasses.dataclass
class UpdateTrunksSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTrunksRequest:
    path_params: UpdateTrunksPathParams = dataclasses.field()
    security: UpdateTrunksSecurity = dataclasses.field()
    request: Optional[UpdateTrunksUpdateTrunksRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateTrunksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    routes_v2_trunks: Optional[shared_routes_v2_trunks.RoutesV2Trunks] = dataclasses.field(default=None)
    
