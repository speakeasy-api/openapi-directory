import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dependenciesout as shared_dependenciesout


@dataclass_json
@dataclasses.dataclass
class SentenceDependencyOut:
    dependencies: shared_dependenciesout.DependenciesOut = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencies') }})
    sentence: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentence') }})
    
