import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudwebriskv1submission as shared_googlecloudwebriskv1submission


@dataclass_json
@dataclasses.dataclass
class GoogleCloudWebriskV1SubmitURIRequest:
    r"""GoogleCloudWebriskV1SubmitURIRequest
    Request to send a potentially malicious URI to WebRisk.
    """
    
    submission: Optional[shared_googlecloudwebriskv1submission.GoogleCloudWebriskV1Submission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission') }})
    
