import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomerManagedEncryption:
    r"""CustomerManagedEncryption
    Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
    """
    
    kms_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    
