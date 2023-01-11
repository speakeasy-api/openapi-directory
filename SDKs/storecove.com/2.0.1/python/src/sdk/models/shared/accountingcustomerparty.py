import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import party as shared_party
from ..shared import publicidentifier as shared_publicidentifier


@dataclass_json
@dataclasses.dataclass
class AccountingCustomerParty:
    r"""AccountingCustomerParty
    The customer receiving the invoice.
    """
    
    party: shared_party.Party = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    public_identifiers: Optional[list[shared_publicidentifier.PublicIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIdentifiers') }})
    
