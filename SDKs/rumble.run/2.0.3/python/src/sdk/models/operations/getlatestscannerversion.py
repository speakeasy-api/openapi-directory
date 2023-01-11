import dataclasses
from typing import Optional
from ..shared import componentversion as shared_componentversion


@dataclasses.dataclass
class GetLatestScannerVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    component_version: Optional[shared_componentversion.ComponentVersion] = dataclasses.field(default=None)
    
