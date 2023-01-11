import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdBlockingRecoveryTag:
    r"""AdBlockingRecoveryTag
    Representation of an ad blocking recovery tag. See https://support.google.com/adsense/answer/11575177.
    """
    
    error_protection_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorProtectionCode') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
