import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ChangeRecoveryQuestionPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChangeRecoveryQuestionRequestBodyPassword:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ChangeRecoveryQuestionRequestBodyRecoveryQuestion:
    answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    question: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass_json
@dataclasses.dataclass
class ChangeRecoveryQuestionRequestBody:
    password: Optional[ChangeRecoveryQuestionRequestBodyPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recovery_question: Optional[ChangeRecoveryQuestionRequestBodyRecoveryQuestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovery_question') }})
    

@dataclasses.dataclass
class ChangeRecoveryQuestionRequest:
    path_params: ChangeRecoveryQuestionPathParams = dataclasses.field()
    request: Optional[ChangeRecoveryQuestionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangeRecoveryQuestionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
