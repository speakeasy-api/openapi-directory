import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RulesCapProblem:
    r"""RulesCapProblem
    You have exceeded the maximum number of rules.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
