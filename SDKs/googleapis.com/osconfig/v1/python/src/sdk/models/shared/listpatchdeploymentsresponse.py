import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patchdeployment as shared_patchdeployment


@dataclass_json
@dataclasses.dataclass
class ListPatchDeploymentsResponse:
    r"""ListPatchDeploymentsResponse
    A response message for listing patch deployments.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    patch_deployments: Optional[list[shared_patchdeployment.PatchDeployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchDeployments') }})
    
