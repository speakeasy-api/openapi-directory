import dataclasses
from typing import Optional


@dataclasses.dataclass
class ActionResponse:
    r"""ActionResponse
    The object encapsulating the output of an operation affecting the PATROL Agent.
    """
    
    psl_output: Optional[str] = dataclasses.field(default=None)
    
