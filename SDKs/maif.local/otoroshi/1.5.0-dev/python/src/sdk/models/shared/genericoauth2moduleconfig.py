import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GenericOauth2ModuleConfig:
    r"""GenericOauth2ModuleConfig
    Settings to authenticate users using a generic OAuth2 provider
    """
    
    access_token_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTokenField') }})
    authorize_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizeUrl') }})
    callback_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    desc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    email_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailField') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginUrl') }})
    logout_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoutUrl') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameField') }})
    otoroshi_data_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('otoroshiDataField') }})
    session_max_age: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionMaxAge') }})
    token_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenUrl') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_info_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfoUrl') }})
    claims: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    jwt_verifier: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtVerifier') }})
    oid_config: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidConfig') }})
    read_profile_from_token: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readProfileFromToken') }})
    scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    use_cookies: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCookies') }})
    use_json: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useJson') }})
    
