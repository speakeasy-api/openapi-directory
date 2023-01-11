import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LocalJwtVerifier:
    r"""LocalJwtVerifier
    A JWT verifier used only for the current service descriptor
    """
    
    algo_settings: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algoSettings') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    source: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    strategy: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    strict: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
