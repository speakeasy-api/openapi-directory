import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketplacedealparty as shared_marketplacedealparty


@dataclass_json
@dataclasses.dataclass
class MarketplaceLabel:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    create_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTimeMs') }})
    deprecated_marketplace_deal_party: Optional[shared_marketplacedealparty.MarketplaceDealParty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecatedMarketplaceDealParty') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
