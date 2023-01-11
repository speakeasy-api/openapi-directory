import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GlobalJwtVerifier:
    r"""GlobalJwtVerifier
    A JWT verifier used by multiple service descriptor
    """
    
    algo_settings: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algoSettings') }})
    desc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    strategy: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    strict: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    
