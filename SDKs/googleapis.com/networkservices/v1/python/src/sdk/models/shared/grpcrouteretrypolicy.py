import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GrpcRouteRetryPolicy:
    r"""GrpcRouteRetryPolicy
    The specifications for retries.
    """
    
    num_retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numRetries') }})
    retry_conditions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryConditions') }})
    
