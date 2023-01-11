import dataclasses
from typing import Optional


@dataclasses.dataclass
class State:
    r"""State
    State
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    state_code: Optional[str] = dataclasses.field(default=None)
    
