import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pageinfo as shared_pageinfo
from ..shared import tokenpagination as shared_tokenpagination
from ..shared import voidedpurchase as shared_voidedpurchase


@dataclass_json
@dataclasses.dataclass
class VoidedPurchasesListResponse:
    r"""VoidedPurchasesListResponse
    Response for the voidedpurchases.list API.
    """
    
    page_info: Optional[shared_pageinfo.PageInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    token_pagination: Optional[shared_tokenpagination.TokenPagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPagination') }})
    voided_purchases: Optional[list[shared_voidedpurchase.VoidedPurchase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voidedPurchases') }})
    
