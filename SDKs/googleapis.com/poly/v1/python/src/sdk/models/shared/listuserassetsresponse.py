import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userasset as shared_userasset


@dataclass_json
@dataclasses.dataclass
class ListUserAssetsResponse:
    r"""ListUserAssetsResponse
    A response message from a request to list.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    user_assets: Optional[list[shared_userasset.UserAsset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAssets') }})
    
