import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledevtoolsremotebuildexecutionadminv1alphaworkerpool as shared_googledevtoolsremotebuildexecutionadminv1alphaworkerpool


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse:
    worker_pools: Optional[list[shared_googledevtoolsremotebuildexecutionadminv1alphaworkerpool.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPools') }})
    
