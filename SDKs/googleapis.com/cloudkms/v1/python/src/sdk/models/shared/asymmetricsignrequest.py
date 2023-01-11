import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import digest as shared_digest


@dataclass_json
@dataclasses.dataclass
class AsymmetricSignRequest:
    r"""AsymmetricSignRequest
    Request message for KeyManagementService.AsymmetricSign.
    """
    
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_crc32c: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCrc32c') }})
    digest: Optional[shared_digest.Digest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    digest_crc32c: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digestCrc32c') }})
    
