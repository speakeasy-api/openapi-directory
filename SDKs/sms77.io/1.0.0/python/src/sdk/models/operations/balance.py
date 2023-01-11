import dataclasses
from typing import Optional


@dataclasses.dataclass
class BalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    balance_200_text_plain_float_number: Optional[str] = dataclasses.field(default=None)
    
