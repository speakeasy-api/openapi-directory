import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IssueEventLabel:
    r"""IssueEventLabel
    Issue Event Label
    """
    
    color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
