import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RegisterEmailRequestProviderEnum(str, Enum):
    EMAIL = "email"


@dataclass_json
@dataclasses.dataclass
class RegisterEmailRequest:
    provider: RegisterEmailRequestProviderEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    application_ids: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_ids') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
