import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkCameraWirelessProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraWirelessProfileRequestBodyIdentity:
    r"""UpdateNetworkCameraWirelessProfileRequestBodyIdentity
    The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
    """
    
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
class UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum(str, Enum):
    PSK = "psk"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS = "8021x-radius"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraWirelessProfileRequestBodySsid:
    r"""UpdateNetworkCameraWirelessProfileRequestBodySsid
    The details of the SSID config.
    """
    
    auth_mode: Optional[UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMode') }})
    encryption_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionMode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    psk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psk') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraWirelessProfileRequestBody:
    identity: Optional[UpdateNetworkCameraWirelessProfileRequestBodyIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssid: Optional[UpdateNetworkCameraWirelessProfileRequestBodySsid] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    

@dataclasses.dataclass
class UpdateNetworkCameraWirelessProfileRequest:
    path_params: UpdateNetworkCameraWirelessProfilePathParams = dataclasses.field()
    request: Optional[UpdateNetworkCameraWirelessProfileRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkCameraWirelessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
