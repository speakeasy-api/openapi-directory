import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledevtoolsremotebuildexecutionadminv1alphaworkerpool as shared_googledevtoolsremotebuildexecutionadminv1alphaworkerpool


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest
    The request used for `CreateWorkerPool`.
    """
    
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolId') }})
    worker_pool: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphaworkerpool.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPool') }})
    
