import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import phraseset as shared_phraseset


@dataclass_json
@dataclasses.dataclass
class CreatePhraseSetRequest:
    r"""CreatePhraseSetRequest
    Message sent by the client for the `CreatePhraseSet` method.
    """
    
    phrase_set: Optional[shared_phraseset.PhraseSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSet') }})
    phrase_set_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSetId') }})
    
