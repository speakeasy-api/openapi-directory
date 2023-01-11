import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carddisplayproperty as shared_carddisplayproperty


@dataclass_json
@dataclasses.dataclass
class CardDisplayBody:
    r"""CardDisplayBody
    Configuration for displayed info on a card
    """
    
    properties: list[shared_carddisplayproperty.CardDisplayProperty] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
