import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportaldeployment as shared_sasportaldeployment


@dataclass_json
@dataclasses.dataclass
class SasPortalListDeploymentsResponse:
    r"""SasPortalListDeploymentsResponse
    Response for ListDeployments.
    """
    
    deployments: Optional[list[shared_sasportaldeployment.SasPortalDeployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
