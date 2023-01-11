import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CardActions:
    r"""CardActions
    Configuration for custom user actions on cards.
    """
    
    base_urls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUrls') }})
    
