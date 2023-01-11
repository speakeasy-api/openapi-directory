import dataclasses
from typing import Any,Optional
from ..shared import googlerpcstatus as shared_googlerpcstatus


@dataclasses.dataclass
class GoogleLongrunningOperation:
    r"""GoogleLongrunningOperation
    This resource represents a long-running operation that is the result of a
    network API call.
    """
    
    done: Optional[bool] = dataclasses.field(default=None)
    error: Optional[shared_googlerpcstatus.GoogleRPCStatus] = dataclasses.field(default=None)
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
