import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mfadetails as shared_mfadetails
from ..shared import usertype_2_enum as shared_usertype_2_enum


@dataclass_json
@dataclasses.dataclass
class UserInfo:
    mfa_details: Optional[shared_mfadetails.MfaDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfa_details') }})
    user_type: Optional[shared_usertype_2_enum.UserType2Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userType') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
