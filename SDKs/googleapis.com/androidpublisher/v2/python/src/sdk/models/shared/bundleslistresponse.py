import dataclasses
from typing import Optional
from ..shared import bundle as shared_bundle


@dataclasses.dataclass
class BundlesListResponse:
    bundles: Optional[list[shared_bundle.Bundle]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    
