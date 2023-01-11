import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replica as shared_replica


@dataclass_json
@dataclasses.dataclass
class UserManaged:
    r"""UserManaged
    A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
    """
    
    replicas: Optional[list[shared_replica.Replica]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicas') }})
    
