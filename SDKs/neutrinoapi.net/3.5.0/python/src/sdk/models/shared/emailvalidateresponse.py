import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EmailValidateResponse:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    domain_error: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainError') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    is_disposable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDisposable') }})
    is_freemail: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFreemail') }})
    is_personal: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPersonal') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    syntax_error: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('syntaxError') }})
    typos_fixed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typosFixed') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
