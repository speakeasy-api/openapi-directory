import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import syncflags as shared_syncflags


@dataclass_json
@dataclasses.dataclass
class MySQLSyncConfig:
    r"""MySQLSyncConfig
    MySQL-specific external server sync settings.
    """
    
    initial_sync_flags: Optional[list[shared_syncflags.SyncFlags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialSyncFlags') }})
    
