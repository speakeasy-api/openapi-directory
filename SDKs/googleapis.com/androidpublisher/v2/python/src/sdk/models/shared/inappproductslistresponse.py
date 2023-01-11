import dataclasses
from typing import Optional
from ..shared import inappproduct as shared_inappproduct
from ..shared import pageinfo as shared_pageinfo
from ..shared import tokenpagination as shared_tokenpagination


@dataclasses.dataclass
class InappproductsListResponse:
    inappproduct: Optional[list[shared_inappproduct.InAppProduct]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    page_info: Optional[shared_pageinfo.PageInfo] = dataclasses.field(default=None)
    token_pagination: Optional[shared_tokenpagination.TokenPagination] = dataclasses.field(default=None)
    
