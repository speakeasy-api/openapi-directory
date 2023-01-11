import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupkind as shared_groupkind


@dataclass_json
@dataclasses.dataclass
class ClusterResourceRestoreScope:
    r"""ClusterResourceRestoreScope
    Identifies the cluster-scoped resources to restore from the Backup.
    """
    
    selected_group_kinds: Optional[list[shared_groupkind.GroupKind]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedGroupKinds') }})
    
