import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optin1 as shared_optin1
from ..shared import settings1 as shared_settings1


@dataclass_json
@dataclasses.dataclass
class SetEurekaInfoRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    opt_in: shared_optin1.OptIn1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in') }})
    settings: shared_settings1.Settings1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
