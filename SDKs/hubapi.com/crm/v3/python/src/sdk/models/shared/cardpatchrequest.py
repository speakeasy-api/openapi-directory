import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardactions as shared_cardactions
from ..shared import carddisplaybody as shared_carddisplaybody
from ..shared import cardfetchbodypatch as shared_cardfetchbodypatch


@dataclass_json
@dataclasses.dataclass
class CardPatchRequest:
    r"""CardPatchRequest
    Body for a patch with optional fields
    """
    
    actions: Optional[shared_cardactions.CardActions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    display: Optional[shared_carddisplaybody.CardDisplayBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    fetch: Optional[shared_cardfetchbodypatch.CardFetchBodyPatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
