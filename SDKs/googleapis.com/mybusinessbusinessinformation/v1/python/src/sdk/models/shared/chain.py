import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chainname as shared_chainname
from ..shared import chainuri as shared_chainuri


@dataclass_json
@dataclasses.dataclass
class Chain:
    r"""Chain
    A chain is a brand that your business's locations can be affiliated with.
    """
    
    chain_names: Optional[list[shared_chainname.ChainName]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chainNames') }})
    location_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationCount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    websites: Optional[list[shared_chainuri.ChainURI]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    
