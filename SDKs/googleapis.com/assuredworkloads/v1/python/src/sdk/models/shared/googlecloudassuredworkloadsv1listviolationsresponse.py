import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassuredworkloadsv1violation as shared_googlecloudassuredworkloadsv1violation


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1ListViolationsResponse:
    r"""GoogleCloudAssuredworkloadsV1ListViolationsResponse
    Response of ListViolations endpoint.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    violations: Optional[list[shared_googlecloudassuredworkloadsv1violation.GoogleCloudAssuredworkloadsV1Violation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violations') }})
    
