import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onboardedstatus_2_enum as shared_onboardedstatus_2_enum


@dataclass_json
@dataclasses.dataclass
class PayeeDelta2:
    payee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    remote_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    dba_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbaName') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    onboarded_status: Optional[shared_onboardedstatus_2_enum.OnboardedStatus2Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardedStatus') }})
    payee_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeCountry') }})
    
