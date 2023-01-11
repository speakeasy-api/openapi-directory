import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UnsupportedAuthenticationProblem:
    r"""UnsupportedAuthenticationProblem
    A problem that indicates that the authentication used is not supported.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
