import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationsettings as shared_verificationsettings


@dataclass_json
@dataclasses.dataclass
class PassThrough:
    r"""PassThrough
    Strategy where only signature and field values are verified
    """
    
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    verification_settings: shared_verificationsettings.VerificationSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationSettings') }})
    
