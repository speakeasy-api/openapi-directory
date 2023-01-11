import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostOauthAccessTokenRequestBody:
    oauth_consumer_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_consumer_key') }})
    oauth_nonce: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_nonce') }})
    oauth_signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_signature') }})
    oauth_signature_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_signature_method') }})
    oauth_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_timestamp') }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_token') }})
    oauth_verifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_verifier') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOauthAccessToken200ApplicationJSON:
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_token') }})
    oauth_token_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_token_secret') }})
    

@dataclasses.dataclass
class PostOauthAccessTokenRequest:
    request: PostOauthAccessTokenRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOauthAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_oauth_access_token_200_application_json_object: Optional[PostOauthAccessToken200ApplicationJSON] = dataclasses.field(default=None)
    
