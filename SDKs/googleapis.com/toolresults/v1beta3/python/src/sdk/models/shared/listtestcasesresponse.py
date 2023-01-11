import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testcase as shared_testcase


@dataclass_json
@dataclasses.dataclass
class ListTestCasesResponse:
    r"""ListTestCasesResponse
    Response message for StepService.ListTestCases.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    test_cases: Optional[list[shared_testcase.TestCase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCases') }})
    
