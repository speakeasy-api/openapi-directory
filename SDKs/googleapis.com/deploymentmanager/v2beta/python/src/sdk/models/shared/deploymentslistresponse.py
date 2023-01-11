import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deployment as shared_deployment


@dataclass_json
@dataclasses.dataclass
class DeploymentsListResponse:
    r"""DeploymentsListResponse
    A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
    """
    
    deployments: Optional[list[shared_deployment.Deployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
