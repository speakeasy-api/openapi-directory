import dataclasses
from typing import Optional
from ..shared import googlelongrunningoperation as shared_googlelongrunningoperation


@dataclasses.dataclass
class GoogleLongrunningListOperationsResponse:
    r"""GoogleLongrunningListOperationsResponse
    The response message for Operations.ListOperations.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None)
    operations: Optional[list[shared_googlelongrunningoperation.GoogleLongrunningOperation]] = dataclasses.field(default=None)
    
