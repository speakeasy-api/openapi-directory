import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apideployment as shared_apideployment


@dataclass_json
@dataclasses.dataclass
class ListAPIDeploymentsResponse:
    r"""ListAPIDeploymentsResponse
    Response message for ListApiDeployments.
    """
    
    api_deployments: Optional[list[shared_apideployment.APIDeployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiDeployments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
