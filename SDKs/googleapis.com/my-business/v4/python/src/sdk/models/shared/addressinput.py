import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddressInput:
    r"""AddressInput
    Input for ADDRESS verification.
    """
    
    mailer_contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailerContactName') }})
    
