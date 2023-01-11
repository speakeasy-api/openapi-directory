import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import trunk_enum_transfer_caller_id_enum as shared_trunk_enum_transfer_caller_id_enum
from ..shared import trunk_enum_transfer_setting_enum as shared_trunk_enum_transfer_setting_enum
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk as shared_trunking_v1_trunk


UPDATE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class UpdateTrunkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateTrunkUpdateTrunkRequest:
    cnam_lookup_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CnamLookupEnabled' }})
    disaster_recovery_method: Optional[UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryMethod' }})
    disaster_recovery_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryUrl' }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DomainName' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    secure: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Secure' }})
    transfer_caller_id: Optional[shared_trunk_enum_transfer_caller_id_enum.TrunkEnumTransferCallerIDEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TransferCallerId' }})
    transfer_mode: Optional[shared_trunk_enum_transfer_setting_enum.TrunkEnumTransferSettingEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TransferMode' }})
    

@dataclasses.dataclass
class UpdateTrunkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTrunkRequest:
    path_params: UpdateTrunkPathParams = dataclasses.field()
    security: UpdateTrunkSecurity = dataclasses.field()
    request: Optional[UpdateTrunkUpdateTrunkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk: Optional[shared_trunking_v1_trunk.TrunkingV1Trunk] = dataclasses.field(default=None)
    
