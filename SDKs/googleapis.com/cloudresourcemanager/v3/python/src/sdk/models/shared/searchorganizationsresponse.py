import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization as shared_organization


@dataclass_json
@dataclasses.dataclass
class SearchOrganizationsResponse:
    r"""SearchOrganizationsResponse
    The response returned from the `SearchOrganizations` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    organizations: Optional[list[shared_organization.Organization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    
