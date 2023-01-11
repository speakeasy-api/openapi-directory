import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oauthaccesstokenresponse as shared_oauthaccesstokenresponse

class CreateAccessTokenApplicationJSONGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"
    REFRESH_TOKEN = "refresh_token"

class CreateAccessTokenApplicationJSONRealmEnum(str, Enum):
    CUSTOMER = "customer"
    CONTRIBUTOR = "contributor"


@dataclass_json
@dataclasses.dataclass
class CreateAccessTokenApplicationJSON:
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    grant_type: CreateAccessTokenApplicationJSONGrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    expires: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    realm: Optional[CreateAccessTokenApplicationJSONRealmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realm') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    
class CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"
    REFRESH_TOKEN = "refresh_token"

class CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum(str, Enum):
    CUSTOMER = "customer"
    CONTRIBUTOR = "contributor"


@dataclasses.dataclass
class CreateAccessTokenApplicationXWwwFormUrlencoded:
    client_id: str = dataclasses.field(metadata={'form': { 'field_name': 'client_id' }})
    grant_type: CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'grant_type' }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'client_secret' }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'code' }})
    expires: Optional[CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'expires' }})
    realm: Optional[CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'realm' }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'refresh_token' }})
    

@dataclasses.dataclass
class CreateAccessTokenRequests:
    object: Optional[CreateAccessTokenApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CreateAccessTokenApplicationXWwwFormUrlencoded] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CreateAccessTokenRequest:
    request: Optional[CreateAccessTokenRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oauth_access_token_response: Optional[shared_oauthaccesstokenresponse.OauthAccessTokenResponse] = dataclasses.field(default=None)
    
