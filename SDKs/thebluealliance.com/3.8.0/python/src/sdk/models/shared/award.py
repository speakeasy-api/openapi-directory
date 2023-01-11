import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import award_recipient as shared_award_recipient


@dataclass_json
@dataclasses.dataclass
class Award:
    award_type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('award_type') }})
    event_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_key') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recipient_list: list[shared_award_recipient.AwardRecipient] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_list') }})
    year: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
