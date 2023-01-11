import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testissue as shared_testissue
from ..shared import testsuiteoverview as shared_testsuiteoverview
from ..shared import testtiming as shared_testtiming
from ..shared import toolexecution as shared_toolexecution


@dataclass_json
@dataclasses.dataclass
class TestExecutionStep:
    r"""TestExecutionStep
    A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
    """
    
    test_issues: Optional[list[shared_testissue.TestIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testIssues') }})
    test_suite_overviews: Optional[list[shared_testsuiteoverview.TestSuiteOverview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSuiteOverviews') }})
    test_timing: Optional[shared_testtiming.TestTiming] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTiming') }})
    tool_execution: Optional[shared_toolexecution.ToolExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolExecution') }})
    
