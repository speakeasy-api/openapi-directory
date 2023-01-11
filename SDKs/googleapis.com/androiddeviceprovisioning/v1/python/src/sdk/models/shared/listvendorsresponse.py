import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import company as shared_company


@dataclass_json
@dataclasses.dataclass
class ListVendorsResponse:
    r"""ListVendorsResponse
    Response message to list vendors of the partner.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    vendors: Optional[list[shared_company.Company]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendors') }})
    
