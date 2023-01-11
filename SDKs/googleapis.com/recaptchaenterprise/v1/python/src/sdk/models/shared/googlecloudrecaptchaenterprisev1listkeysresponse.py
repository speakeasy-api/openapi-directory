import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1key as shared_googlecloudrecaptchaenterprisev1key


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1ListKeysResponse:
    r"""GoogleCloudRecaptchaenterpriseV1ListKeysResponse
    Response to request to list keys in a project.
    """
    
    keys: Optional[list[shared_googlecloudrecaptchaenterprisev1key.GoogleCloudRecaptchaenterpriseV1Key]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
