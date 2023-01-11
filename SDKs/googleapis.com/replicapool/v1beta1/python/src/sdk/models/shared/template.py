import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action
from ..shared import healthcheck as shared_healthcheck
from ..shared import vmparams as shared_vmparams


@dataclass_json
@dataclasses.dataclass
class Template:
    r"""Template
    The template used for creating replicas in the pool.
    """
    
    action: Optional[shared_action.Action] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    health_checks: Optional[list[shared_healthcheck.HealthCheck]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthChecks') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    vm_params: Optional[shared_vmparams.VMParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmParams') }})
    
