import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EmailVerifyResponse:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    domain_error: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainError') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    is_catch_all: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCatchAll') }})
    is_deferred: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeferred') }})
    is_disposable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDisposable') }})
    is_freemail: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFreemail') }})
    is_personal: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPersonal') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    smtp_response: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('smtpResponse') }})
    smtp_status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('smtpStatus') }})
    syntax_error: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('syntaxError') }})
    typos_fixed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typosFixed') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    verified: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
