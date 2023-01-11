import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sku as shared_sku


@dataclass_json
@dataclasses.dataclass
class ListSkusResponse:
    r"""ListSkusResponse
    Response message for `ListSkus`.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    skus: Optional[list[shared_sku.Sku]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skus') }})
    
