import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DuplicateRuleProblem:
    r"""DuplicateRuleProblem
    The rule you have submitted is a duplicate.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
