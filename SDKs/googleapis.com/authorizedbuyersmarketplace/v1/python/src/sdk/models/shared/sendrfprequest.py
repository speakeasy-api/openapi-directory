import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contact as shared_contact
from ..shared import money as shared_money
from ..shared import criteriatargeting as shared_criteriatargeting
from ..shared import inventorysizetargeting as shared_inventorysizetargeting
from ..shared import preferreddealterms as shared_preferreddealterms
from ..shared import programmaticguaranteedterms as shared_programmaticguaranteedterms


@dataclass_json
@dataclasses.dataclass
class SendRfpRequest:
    r"""SendRfpRequest
    Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
    """
    
    buyer_contacts: Optional[list[shared_contact.Contact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    client: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    estimated_gross_spend: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    flight_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTime') }})
    flight_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTime') }})
    geo_targeting: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    inventory_size_targeting: Optional[shared_inventorysizetargeting.InventorySizeTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySizeTargeting') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    preferred_deal_terms: Optional[shared_preferreddealterms.PreferredDealTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredDealTerms') }})
    programmatic_guaranteed_terms: Optional[shared_programmaticguaranteedterms.ProgrammaticGuaranteedTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticGuaranteedTerms') }})
    publisher_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    
