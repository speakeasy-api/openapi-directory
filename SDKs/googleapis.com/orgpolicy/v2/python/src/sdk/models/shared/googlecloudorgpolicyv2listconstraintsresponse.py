import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv2constraint as shared_googlecloudorgpolicyv2constraint


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2ListConstraintsResponse:
    r"""GoogleCloudOrgpolicyV2ListConstraintsResponse
    The response returned from the ListConstraints method.
    """
    
    constraints: Optional[list[shared_googlecloudorgpolicyv2constraint.GoogleCloudOrgpolicyV2Constraint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
