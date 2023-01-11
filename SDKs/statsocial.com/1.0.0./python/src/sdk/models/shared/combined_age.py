import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eighteen_24 as shared_eighteen_24
from ..shared import twenty_five_34 as shared_twenty_five_34
from ..shared import thirty_five_44 as shared_thirty_five_44


@dataclass_json
@dataclasses.dataclass
class CombinedAge:
    eighteen_24: Optional[shared_eighteen_24.Eighteen24] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('18 - 24') }})
    twenty_five_34: Optional[shared_twenty_five_34.TwentyFive34] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('25 - 34') }})
    thirty_five_44: Optional[shared_thirty_five_44.ThirtyFive44] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('35 - 44') }})
    
