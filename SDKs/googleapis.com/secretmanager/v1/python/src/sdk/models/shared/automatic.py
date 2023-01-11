import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanagedencryption as shared_customermanagedencryption


@dataclass_json
@dataclasses.dataclass
class Automatic:
    r"""Automatic
    A replication policy that replicates the Secret payload without any restrictions.
    """
    
    customer_managed_encryption: Optional[shared_customermanagedencryption.CustomerManagedEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryption') }})
    
