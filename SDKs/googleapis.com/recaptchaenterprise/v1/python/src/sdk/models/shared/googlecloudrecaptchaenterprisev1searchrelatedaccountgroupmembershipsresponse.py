import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1relatedaccountgroupmembership as shared_googlecloudrecaptchaenterprisev1relatedaccountgroupmembership


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse:
    r"""GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
    The response to a `SearchRelatedAccountGroupMemberships` call.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    related_account_group_memberships: Optional[list[shared_googlecloudrecaptchaenterprisev1relatedaccountgroupmembership.GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAccountGroupMemberships') }})
    
