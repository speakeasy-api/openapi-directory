import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketplacenote as shared_marketplacenote


@dataclass_json
@dataclasses.dataclass
class UpdatePrivateAuctionProposalRequest:
    external_deal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDealId') }})
    note: Optional[shared_marketplacenote.MarketplaceNote] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    proposal_revision_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevisionNumber') }})
    update_action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateAction') }})
    
