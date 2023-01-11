import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketplacedeal as shared_marketplacedeal


@dataclass_json
@dataclasses.dataclass
class AddOrderDealsResponse:
    deals: Optional[list[shared_marketplacedeal.MarketplaceDeal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    proposal_revision_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevisionNumber') }})
    
