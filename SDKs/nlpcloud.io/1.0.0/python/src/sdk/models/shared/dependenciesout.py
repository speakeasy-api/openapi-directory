import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import arc as shared_arc
from ..shared import word as shared_word


@dataclass_json
@dataclasses.dataclass
class DependenciesOut:
    arcs: list[shared_arc.Arc] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arcs') }})
    words: list[shared_word.Word] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
