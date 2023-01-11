import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NotificationRateLimit:
    r"""NotificationRateLimit
    Control over the rate of notifications sent to this alert policy's notification channels.
    """
    
    period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    
