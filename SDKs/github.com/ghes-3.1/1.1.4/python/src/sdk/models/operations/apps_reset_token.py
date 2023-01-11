import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorization as shared_authorization
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class AppsResetTokenPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsResetTokenRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    

@dataclasses.dataclass
class AppsResetTokenRequest:
    path_params: AppsResetTokenPathParams = dataclasses.field()
    request: Optional[AppsResetTokenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppsResetTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
