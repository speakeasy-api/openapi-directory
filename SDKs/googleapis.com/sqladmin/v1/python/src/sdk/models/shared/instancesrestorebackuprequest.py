import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import restorebackupcontext as shared_restorebackupcontext


@dataclass_json
@dataclasses.dataclass
class InstancesRestoreBackupRequest:
    r"""InstancesRestoreBackupRequest
    Database instance restore backup request.
    """
    
    restore_backup_context: Optional[shared_restorebackupcontext.RestoreBackupContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreBackupContext') }})
    
