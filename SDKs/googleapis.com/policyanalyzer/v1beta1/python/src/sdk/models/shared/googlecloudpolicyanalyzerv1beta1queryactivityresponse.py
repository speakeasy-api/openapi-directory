import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicyanalyzerv1beta1activity as shared_googlecloudpolicyanalyzerv1beta1activity


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse:
    r"""GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse
    Response to the `QueryActivity` method.
    """
    
    activities: Optional[list[shared_googlecloudpolicyanalyzerv1beta1activity.GoogleCloudPolicyanalyzerV1beta1Activity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
