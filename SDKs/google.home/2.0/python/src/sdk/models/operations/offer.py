import dataclasses
from typing import Optional
from ..shared import example12 as shared_example12


@dataclasses.dataclass
class OfferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example12: Optional[shared_example12.Example12] = dataclasses.field(default=None)
    
