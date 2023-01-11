import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest:
    r"""GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest
    The request message to search related account group memberships.
    """
    
    hashed_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashedAccountId') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    
