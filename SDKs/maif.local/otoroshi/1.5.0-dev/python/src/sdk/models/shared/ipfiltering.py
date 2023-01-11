import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IPFiltering:
    r"""IPFiltering
    The filtering configuration block for a service of globally.
    """
    
    blacklist: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blacklist') }})
    whitelist: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelist') }})
    
