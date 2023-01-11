import dataclasses
from typing import Optional
from ..shared import errordetail as shared_errordetail


@dataclasses.dataclass
class Error:
    category: str = dataclasses.field()
    correlation_id: str = dataclasses.field()
    message: str = dataclasses.field()
    context: Optional[dict[str, list[str]]] = dataclasses.field(default=None)
    errors: Optional[list[shared_errordetail.ErrorDetail]] = dataclasses.field(default=None)
    links: Optional[dict[str, str]] = dataclasses.field(default=None)
    sub_category: Optional[str] = dataclasses.field(default=None)
    
