import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardresponse as shared_cardresponse


@dataclass_json
@dataclasses.dataclass
class CardListResponse:
    r"""CardListResponse
    List of card definitions
    """
    
    results: list[shared_cardresponse.CardResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
