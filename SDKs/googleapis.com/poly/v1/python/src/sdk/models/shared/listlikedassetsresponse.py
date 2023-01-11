import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset


@dataclass_json
@dataclasses.dataclass
class ListLikedAssetsResponse:
    r"""ListLikedAssetsResponse
    A response message from a request to list.
    """
    
    assets: Optional[list[shared_asset.Asset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
