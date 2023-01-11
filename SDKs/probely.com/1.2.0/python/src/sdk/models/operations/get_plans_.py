import dataclasses
from typing import Optional
from ..shared import plan as shared_plan


@dataclasses.dataclass
class GetPlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    plans: Optional[list[shared_plan.Plan]] = dataclasses.field(default=None)
    
