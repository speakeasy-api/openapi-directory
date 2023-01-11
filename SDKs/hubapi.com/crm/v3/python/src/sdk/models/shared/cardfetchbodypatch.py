import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardobjecttypebody as shared_cardobjecttypebody


@dataclass_json
@dataclasses.dataclass
class CardFetchBodyPatch:
    r"""CardFetchBodyPatch
    Variant of CardFetchBody with fields as optional for patches
    """
    
    object_types: list[shared_cardobjecttypebody.CardObjectTypeBody] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    target_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    
