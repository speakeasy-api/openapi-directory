import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv2customconstraint as shared_googlecloudorgpolicyv2customconstraint


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse:
    r"""GoogleCloudOrgpolicyV2ListCustomConstraintsResponse
    The response returned from the ListCustomConstraints method. It will be empty if no `CustomConstraints` are set on the organization resource.
    """
    
    custom_constraints: Optional[list[shared_googlecloudorgpolicyv2customconstraint.GoogleCloudOrgpolicyV2CustomConstraint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customConstraints') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
