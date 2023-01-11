import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketplacedeal as shared_marketplacedeal
from ..shared import proposal as shared_proposal


@dataclass_json
@dataclasses.dataclass
class EditAllOrderDealsRequest:
    deals: Optional[list[shared_marketplacedeal.MarketplaceDeal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    proposal: Optional[shared_proposal.Proposal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposal') }})
    proposal_revision_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevisionNumber') }})
    update_action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateAction') }})
    
