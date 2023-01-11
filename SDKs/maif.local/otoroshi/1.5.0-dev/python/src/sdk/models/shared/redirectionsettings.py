import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RedirectionSettings:
    r"""RedirectionSettings
    The configuration for redirection per service
    """
    
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
