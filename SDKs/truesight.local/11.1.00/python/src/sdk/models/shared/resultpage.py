import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ResultPage:
    r"""ResultPage
    Encapsulates a list of results.
    """
    
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    restricted_rights: Optional[bool] = dataclasses.field(default=None)
    total: Optional[int] = dataclasses.field(default=None)
    
