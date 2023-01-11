import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentencedependencyout as shared_sentencedependencyout


@dataclass_json
@dataclasses.dataclass
class SentenceDependenciesOut:
    sentence_dependencies: list[shared_sentencedependencyout.SentenceDependencyOut] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentence_dependencies') }})
    
