import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicidentifier as shared_publicidentifier


@dataclass_json
@dataclasses.dataclass
class InvoiceRecipientPreflight:
    r"""InvoiceRecipientPreflight
    Identifies the invoice recipient to preflight
    """
    
    public_identifiers: Optional[list[shared_publicidentifier.PublicIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIdentifiers') }})
    
