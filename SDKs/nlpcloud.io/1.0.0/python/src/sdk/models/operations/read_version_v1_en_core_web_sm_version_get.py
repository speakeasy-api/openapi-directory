import dataclasses
from typing import Optional
from ..shared import versionout as shared_versionout


@dataclasses.dataclass
class ReadVersionV1EnCoreWebSmVersionGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    version_out: Optional[shared_versionout.VersionOut] = dataclasses.field(default=None)
    
