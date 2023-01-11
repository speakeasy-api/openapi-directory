import dataclasses
from typing import Optional
from ..shared import timestamp as shared_timestamp


@dataclasses.dataclass
class DeveloperComment:
    last_modified: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None)
    text: Optional[str] = dataclasses.field(default=None)
    
