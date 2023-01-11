import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardobjecttypebody as shared_cardobjecttypebody


@dataclass_json
@dataclasses.dataclass
class CardFetchBody:
    r"""CardFetchBody
    Configuration for this card's data fetch request.
    """
    
    object_types: list[shared_cardobjecttypebody.CardObjectTypeBody] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    target_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    
