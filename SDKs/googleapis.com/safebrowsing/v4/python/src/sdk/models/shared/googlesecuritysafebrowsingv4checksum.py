import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4Checksum:
    r"""GoogleSecuritySafebrowsingV4Checksum
    The expected state of a client's local database.
    """
    
    sha256: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256') }})
    
