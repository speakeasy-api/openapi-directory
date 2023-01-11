import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import transactions as shared_transactions


@dataclass_json
@dataclasses.dataclass
class AccountReport:
    r"""AccountReport
    JSON based account report.
    This account report contains transactions resulting from the query parameters.
    
    'booked' shall be contained if bookingStatus parameter is set to \"booked\" or \"both\".
    
    'pending' is not contained if the bookingStatus parameter is set to \"booked\" or \"information\".
    
    'information' Only contained if the bookingStatus is set to \"information\" and if supported by ASPSP.
    
    """
    
    links: dict[str, shared_hreftype.HrefType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    booked: Optional[list[shared_transactions.Transactions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booked') }})
    information: Optional[list[shared_transactions.Transactions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('information') }})
    pending: Optional[list[shared_transactions.Transactions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    
