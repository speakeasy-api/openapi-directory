import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class V2APITarget:
    r"""V2APITarget
    A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
    """
    
    methods: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methods') }})
    service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
