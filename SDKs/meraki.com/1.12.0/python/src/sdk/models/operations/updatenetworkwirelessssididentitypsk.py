import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidIdentityPskRequestBody:
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    passphrase: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidIdentityPskRequest:
    path_params: UpdateNetworkWirelessSsidIdentityPskPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidIdentityPskRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidIdentityPskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_identity_psk_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
