import dataclasses
from typing import Optional


@dataclasses.dataclass
class TermXRef:
    key: Optional[int] = dataclasses.field(default=None)
    term_acc: Optional[str] = dataclasses.field(default=None)
    xref_description: Optional[str] = dataclasses.field(default=None)
    xref_value: Optional[str] = dataclasses.field(default=None)
    
