import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanagedencryptionstatus as shared_customermanagedencryptionstatus


@dataclass_json
@dataclasses.dataclass
class ReplicaStatus:
    r"""ReplicaStatus
    Describes the status of a user-managed replica for the SecretVersion.
    """
    
    customer_managed_encryption: Optional[shared_customermanagedencryptionstatus.CustomerManagedEncryptionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryption') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
