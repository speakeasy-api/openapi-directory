import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkCameraWirelessProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraWirelessProfileRequestBodyIdentity:
    r"""CreateNetworkCameraWirelessProfileRequestBodyIdentity
    The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
    """
    
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
class CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum(str, Enum):
    PSK = "psk"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS = "8021x-radius"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraWirelessProfileRequestBodySsid:
    r"""CreateNetworkCameraWirelessProfileRequestBodySsid
    The details of the SSID config.
    """
    
    auth_mode: Optional[CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMode') }})
    encryption_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionMode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    psk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psk') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraWirelessProfileRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssid: CreateNetworkCameraWirelessProfileRequestBodySsid = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    identity: Optional[CreateNetworkCameraWirelessProfileRequestBodyIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    

@dataclasses.dataclass
class CreateNetworkCameraWirelessProfileRequest:
    path_params: CreateNetworkCameraWirelessProfilePathParams = dataclasses.field()
    request: CreateNetworkCameraWirelessProfileRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkCameraWirelessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
