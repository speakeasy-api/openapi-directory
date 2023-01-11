import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class Canary:
    r"""Canary
    The configuration of the canary mode for a service descriptor
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    root: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    targets: list[shared_target.Target] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    
