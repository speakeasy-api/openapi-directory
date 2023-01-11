import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Zero:
    r"""Zero
    Connect to an App User
    """
    
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
