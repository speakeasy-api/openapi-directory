import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledevtoolsremotebuildexecutionadminv1alphainstance as shared_googledevtoolsremotebuildexecutionadminv1alphainstance


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest
    The request used for `CreateInstance`.
    """
    
    instance: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphainstance.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
