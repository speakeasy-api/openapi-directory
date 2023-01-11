import dataclasses
from typing import Optional


@dataclasses.dataclass
class Setting:
    r"""Setting
    A setting for Glass.
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
