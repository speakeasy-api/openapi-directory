import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mfatype_enum as shared_mfatype_enum


@dataclass_json
@dataclasses.dataclass
class MfaDetails:
    mfa_type: Optional[shared_mfatype_enum.MfaTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfa_type') }})
    verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
