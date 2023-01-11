import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import phrase as shared_phrase


@dataclass_json
@dataclasses.dataclass
class PhraseSet:
    r"""PhraseSet
    Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results.
    """
    
    boost: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boost') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phrases: Optional[list[shared_phrase.Phrase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phrases') }})
    
