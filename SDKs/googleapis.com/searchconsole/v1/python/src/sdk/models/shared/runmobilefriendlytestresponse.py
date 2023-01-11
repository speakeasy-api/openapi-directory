import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobilefriendlyissue as shared_mobilefriendlyissue
from ..shared import resourceissue as shared_resourceissue
from ..shared import image as shared_image
from ..shared import teststatus as shared_teststatus

class RunMobileFriendlyTestResponseMobileFriendlinessEnum(str, Enum):
    MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
    MOBILE_FRIENDLY = "MOBILE_FRIENDLY"
    NOT_MOBILE_FRIENDLY = "NOT_MOBILE_FRIENDLY"


@dataclass_json
@dataclasses.dataclass
class RunMobileFriendlyTestResponse:
    r"""RunMobileFriendlyTestResponse
    Mobile-friendly test response, including mobile-friendly issues and resource issues.
    """
    
    mobile_friendliness: Optional[RunMobileFriendlyTestResponseMobileFriendlinessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileFriendliness') }})
    mobile_friendly_issues: Optional[list[shared_mobilefriendlyissue.MobileFriendlyIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileFriendlyIssues') }})
    resource_issues: Optional[list[shared_resourceissue.ResourceIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIssues') }})
    screenshot: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshot') }})
    test_status: Optional[shared_teststatus.TestStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testStatus') }})
    
