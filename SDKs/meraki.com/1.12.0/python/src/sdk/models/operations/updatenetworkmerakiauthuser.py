import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkMerakiAuthUserPathParams:
    meraki_auth_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'merakiAuthUserId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations:
    ssid_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssidNumber') }})
    expires_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkMerakiAuthUserRequestBody:
    authorizations: Optional[list[UpdateNetworkMerakiAuthUserRequestBodyAuthorizations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizations') }})
    email_password_to_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPasswordToUser') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclasses.dataclass
class UpdateNetworkMerakiAuthUserRequest:
    path_params: UpdateNetworkMerakiAuthUserPathParams = dataclasses.field()
    request: Optional[UpdateNetworkMerakiAuthUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkMerakiAuthUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_meraki_auth_user_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
