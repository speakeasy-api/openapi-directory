import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import header as shared_header


@dataclass_json
@dataclasses.dataclass
class VulnerableHeaders:
    r"""VulnerableHeaders
    Information about vulnerable or missing HTTP Headers.
    """
    
    headers: Optional[list[shared_header.Header]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    missing_headers: Optional[list[shared_header.Header]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingHeaders') }})
    
