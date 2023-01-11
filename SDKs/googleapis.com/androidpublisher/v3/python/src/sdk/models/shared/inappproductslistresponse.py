import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappproduct as shared_inappproduct
from ..shared import pageinfo as shared_pageinfo
from ..shared import tokenpagination as shared_tokenpagination


@dataclass_json
@dataclasses.dataclass
class InappproductsListResponse:
    r"""InappproductsListResponse
    Response listing all in-app products.
    """
    
    inappproduct: Optional[list[shared_inappproduct.InAppProduct]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inappproduct') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    page_info: Optional[shared_pageinfo.PageInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    token_pagination: Optional[shared_tokenpagination.TokenPagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPagination') }})
    
