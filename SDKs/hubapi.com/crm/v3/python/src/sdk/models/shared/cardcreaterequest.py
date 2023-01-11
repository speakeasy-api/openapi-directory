import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardactions as shared_cardactions
from ..shared import carddisplaybody as shared_carddisplaybody
from ..shared import cardfetchbody as shared_cardfetchbody


@dataclass_json
@dataclasses.dataclass
class CardCreateRequest:
    r"""CardCreateRequest
    State of card definition to be created
    """
    
    actions: shared_cardactions.CardActions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    display: shared_carddisplaybody.CardDisplayBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    fetch: shared_cardfetchbody.CardFetchBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
