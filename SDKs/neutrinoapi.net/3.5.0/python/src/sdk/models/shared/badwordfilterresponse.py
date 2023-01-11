import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BadWordFilterResponse:
    bad_words_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('badWordsList') }})
    bad_words_total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('badWordsTotal') }})
    censored_content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('censoredContent') }})
    is_bad: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBad') }})
    
