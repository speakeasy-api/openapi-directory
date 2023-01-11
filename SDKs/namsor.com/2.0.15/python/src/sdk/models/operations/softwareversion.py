import dataclasses
from typing import Optional
from ..shared import softwareversionout as shared_softwareversionout


@dataclasses.dataclass
class SoftwareVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    software_version_out: Optional[shared_softwareversionout.SoftwareVersionOut] = dataclasses.field(default=None)
    
