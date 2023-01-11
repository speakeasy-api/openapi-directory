import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DecryptRequest:
    r"""DecryptRequest
    Request message for KeyManagementService.Decrypt.
    """
    
    additional_authenticated_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAuthenticatedData') }})
    additional_authenticated_data_crc32c: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAuthenticatedDataCrc32c') }})
    ciphertext: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertext') }})
    ciphertext_crc32c: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertextCrc32c') }})
    
