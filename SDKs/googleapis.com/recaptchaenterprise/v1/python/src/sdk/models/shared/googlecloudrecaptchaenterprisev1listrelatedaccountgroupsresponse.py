import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1relatedaccountgroup as shared_googlecloudrecaptchaenterprisev1relatedaccountgroup


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse:
    r"""GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
    The response to a `ListRelatedAccountGroups` call.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    related_account_groups: Optional[list[shared_googlecloudrecaptchaenterprisev1relatedaccountgroup.GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAccountGroups') }})
    
