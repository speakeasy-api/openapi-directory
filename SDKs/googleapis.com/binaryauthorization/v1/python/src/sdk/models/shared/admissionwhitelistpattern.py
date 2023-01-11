import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdmissionWhitelistPattern:
    r"""AdmissionWhitelistPattern
    An admission allowlist pattern exempts images from checks by admission rules.
    """
    
    name_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePattern') }})
    
