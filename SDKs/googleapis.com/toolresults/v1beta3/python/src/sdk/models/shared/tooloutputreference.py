import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestamp as shared_timestamp
from ..shared import filereference as shared_filereference
from ..shared import testcasereference as shared_testcasereference


@dataclass_json
@dataclasses.dataclass
class ToolOutputReference:
    r"""ToolOutputReference
    A reference to a ToolExecution output file.
    """
    
    creation_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    output: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    test_case: Optional[shared_testcasereference.TestCaseReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCase') }})
    
