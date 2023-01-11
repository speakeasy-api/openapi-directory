import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConnectionExceptionProblemConnectionIssueEnum(str, Enum):
    TOO_MANY_CONNECTIONS = "TooManyConnections"
    PROVISIONING_SUBSCRIPTION = "ProvisioningSubscription"


@dataclass_json
@dataclasses.dataclass
class ConnectionExceptionProblem:
    r"""ConnectionExceptionProblem
    A problem that indicates something is wrong with the connection
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    connection_issue: Optional[ConnectionExceptionProblemConnectionIssueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_issue') }})
    
