import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SigningBasket:
    r"""SigningBasket
    JSON Body of a establish signing basket request.
    The body shall contain at least one entry.
    
    """
    
    consent_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentIds') }})
    payment_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentIds') }})
    
