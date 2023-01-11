import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automaticstatus as shared_automaticstatus
from ..shared import usermanagedstatus as shared_usermanagedstatus


@dataclass_json
@dataclasses.dataclass
class ReplicationStatus:
    r"""ReplicationStatus
    The replication status of a SecretVersion.
    """
    
    automatic: Optional[shared_automaticstatus.AutomaticStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatic') }})
    user_managed: Optional[shared_usermanagedstatus.UserManagedStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManaged') }})
    
