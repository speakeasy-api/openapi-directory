import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Timezone:
    r"""Timezone
    Timezone information of the node.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offset: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
