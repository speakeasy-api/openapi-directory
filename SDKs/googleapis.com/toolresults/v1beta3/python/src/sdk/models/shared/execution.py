import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestamp as shared_timestamp
from ..shared import outcome as shared_outcome
from ..shared import specification as shared_specification

class ExecutionStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclasses.dataclass
class Execution:
    r"""Execution
    An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
    """
    
    completion_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    creation_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    dimension_definitions: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionDefinitions') }})
    execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    outcome: Optional[shared_outcome.Outcome] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    specification: Optional[shared_specification.Specification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specification') }})
    state: Optional[ExecutionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test_execution_matrix_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testExecutionMatrixId') }})
    
