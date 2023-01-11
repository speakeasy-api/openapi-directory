import dataclasses
from typing import Optional
from ..shared import pageinfo as shared_pageinfo
from ..shared import tokenpagination as shared_tokenpagination
from ..shared import voidedpurchase as shared_voidedpurchase


@dataclasses.dataclass
class VoidedPurchasesListResponse:
    page_info: Optional[shared_pageinfo.PageInfo] = dataclasses.field(default=None)
    token_pagination: Optional[shared_tokenpagination.TokenPagination] = dataclasses.field(default=None)
    voided_purchases: Optional[list[shared_voidedpurchase.VoidedPurchase]] = dataclasses.field(default=None)
    
