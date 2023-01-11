import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Option:
    r"""Option
    An option for a field value.
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_order: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOrder') }})
    double_data: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleData') }})
    hidden: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    read_only: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
