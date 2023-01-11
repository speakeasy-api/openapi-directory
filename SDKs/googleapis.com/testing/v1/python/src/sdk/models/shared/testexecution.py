import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environment as shared_environment
from ..shared import shard as shared_shard
from ..shared import testdetails as shared_testdetails
from ..shared import testspecification as shared_testspecification
from ..shared import toolresultsstep as shared_toolresultsstep

class TestExecutionStateEnum(str, Enum):
    TEST_STATE_UNSPECIFIED = "TEST_STATE_UNSPECIFIED"
    VALIDATING = "VALIDATING"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    FINISHED = "FINISHED"
    ERROR = "ERROR"
    UNSUPPORTED_ENVIRONMENT = "UNSUPPORTED_ENVIRONMENT"
    INCOMPATIBLE_ENVIRONMENT = "INCOMPATIBLE_ENVIRONMENT"
    INCOMPATIBLE_ARCHITECTURE = "INCOMPATIBLE_ARCHITECTURE"
    CANCELLED = "CANCELLED"
    INVALID = "INVALID"


@dataclass_json
@dataclasses.dataclass
class TestExecution:
    r"""TestExecution
    A single test executed in a single environment.
    """
    
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    matrix_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrixId') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    shard: Optional[shared_shard.Shard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shard') }})
    state: Optional[TestExecutionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test_details: Optional[shared_testdetails.TestDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testDetails') }})
    test_specification: Optional[shared_testspecification.TestSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSpecification') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tool_results_step: Optional[shared_toolresultsstep.ToolResultsStep] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolResultsStep') }})
    
