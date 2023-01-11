import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import region as shared_region


@dataclasses.dataclass
class GetRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    regions: Optional[list[shared_region.Region]] = dataclasses.field(default=None)
    
