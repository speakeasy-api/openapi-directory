import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appenginerouting as shared_appenginerouting
from ..shared import ratelimits as shared_ratelimits
from ..shared import retryconfig as shared_retryconfig
from ..shared import stackdriverloggingconfig as shared_stackdriverloggingconfig

class QueueStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class Queue:
    r"""Queue
    A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
    """
    
    app_engine_routing_override: Optional[shared_appenginerouting.AppEngineRouting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineRoutingOverride') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    purge_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purgeTime') }})
    rate_limits: Optional[shared_ratelimits.RateLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateLimits') }})
    retry_config: Optional[shared_retryconfig.RetryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryConfig') }})
    stackdriver_logging_config: Optional[shared_stackdriverloggingconfig.StackdriverLoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackdriverLoggingConfig') }})
    state: Optional[QueueStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
