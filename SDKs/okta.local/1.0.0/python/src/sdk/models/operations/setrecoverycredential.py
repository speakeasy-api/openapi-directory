import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SetRecoveryCredentialPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion:
    answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    question: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass_json
@dataclasses.dataclass
class SetRecoveryCredentialRequestBodyCredentials:
    recovery_question: Optional[SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovery_question') }})
    

@dataclass_json
@dataclasses.dataclass
class SetRecoveryCredentialRequestBody:
    credentials: Optional[SetRecoveryCredentialRequestBodyCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    

@dataclasses.dataclass
class SetRecoveryCredentialRequest:
    path_params: SetRecoveryCredentialPathParams = dataclasses.field()
    request: Optional[SetRecoveryCredentialRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetRecoveryCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
