import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanagedencryption as shared_customermanagedencryption


@dataclass_json
@dataclasses.dataclass
class Replica:
    r"""Replica
    Represents a Replica for this Secret.
    """
    
    customer_managed_encryption: Optional[shared_customermanagedencryption.CustomerManagedEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryption') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
