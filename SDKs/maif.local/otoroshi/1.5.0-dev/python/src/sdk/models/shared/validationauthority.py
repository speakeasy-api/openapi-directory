import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ValidationAuthority:
    r"""ValidationAuthority
    Settings to access a validation authority server
    """
    
    always_valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alwaysValid') }})
    bad_ttl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('badTtl') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    good_ttl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('goodTtl') }})
    headers: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no_cache: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('noCache') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
