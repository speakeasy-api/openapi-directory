import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import phraseset as shared_phraseset


@dataclass_json
@dataclasses.dataclass
class ListPhraseSetResponse:
    r"""ListPhraseSetResponse
    Message returned to the client by the `ListPhraseSet` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    phrase_sets: Optional[list[shared_phraseset.PhraseSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSets') }})
    
