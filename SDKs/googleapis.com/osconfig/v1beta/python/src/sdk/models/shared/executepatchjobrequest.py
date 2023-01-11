import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patchinstancefilter as shared_patchinstancefilter
from ..shared import patchconfig as shared_patchconfig
from ..shared import patchrollout as shared_patchrollout


@dataclass_json
@dataclasses.dataclass
class ExecutePatchJobRequest:
    r"""ExecutePatchJobRequest
    A request message to initiate patching across Compute Engine instances.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    instance_filter: Optional[shared_patchinstancefilter.PatchInstanceFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    patch_config: Optional[shared_patchconfig.PatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchConfig') }})
    rollout: Optional[shared_patchrollout.PatchRollout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    
