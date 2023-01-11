import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkWirelessSsidIdentityPskPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkWirelessSsidIdentityPskRequestBody:
    group_policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    passphrase: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    

@dataclasses.dataclass
class CreateNetworkWirelessSsidIdentityPskRequest:
    path_params: CreateNetworkWirelessSsidIdentityPskPathParams = dataclasses.field()
    request: CreateNetworkWirelessSsidIdentityPskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkWirelessSsidIdentityPskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_wireless_ssid_identity_psk_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
