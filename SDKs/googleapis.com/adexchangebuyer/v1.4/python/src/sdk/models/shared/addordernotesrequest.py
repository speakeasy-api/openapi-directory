import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketplacenote as shared_marketplacenote


@dataclass_json
@dataclasses.dataclass
class AddOrderNotesRequest:
    notes: Optional[list[shared_marketplacenote.MarketplaceNote]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    
