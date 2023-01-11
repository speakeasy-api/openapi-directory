import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ServiceAccountDelegationInfo:
    r"""ServiceAccountDelegationInfo
    Identity delegation history of an authenticated service account.
    """
    
    principal_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalEmail') }})
    principal_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalSubject') }})
    
