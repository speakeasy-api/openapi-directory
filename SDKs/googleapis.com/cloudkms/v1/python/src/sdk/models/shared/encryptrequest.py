import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EncryptRequest:
    r"""EncryptRequest
    Request message for KeyManagementService.Encrypt.
    """
    
    additional_authenticated_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAuthenticatedData') }})
    additional_authenticated_data_crc32c: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAuthenticatedDataCrc32c') }})
    plaintext: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaintext') }})
    plaintext_crc32c: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaintextCrc32c') }})
    
