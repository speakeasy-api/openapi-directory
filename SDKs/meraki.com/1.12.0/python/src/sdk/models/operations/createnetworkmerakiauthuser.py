import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkMerakiAuthUserPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum(str, Enum):
    GUEST = "Guest"
    EIGHT_HUNDRED_AND_TWO_1_X = "802.1X"
    CLIENT_VPN = "Client VPN"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkMerakiAuthUserRequestBodyAuthorizations:
    expires_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt') }})
    ssid_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssidNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkMerakiAuthUserRequestBody:
    authorizations: list[CreateNetworkMerakiAuthUserRequestBodyAuthorizations] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizations') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    account_type: Optional[CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    email_password_to_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPasswordToUser') }})
    

@dataclasses.dataclass
class CreateNetworkMerakiAuthUserRequest:
    path_params: CreateNetworkMerakiAuthUserPathParams = dataclasses.field()
    request: CreateNetworkMerakiAuthUserRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkMerakiAuthUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_meraki_auth_user_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
