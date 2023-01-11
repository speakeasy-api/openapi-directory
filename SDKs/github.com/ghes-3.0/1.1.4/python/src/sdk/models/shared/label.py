import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Label:
    r"""Label
    Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
    """
    
    color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
