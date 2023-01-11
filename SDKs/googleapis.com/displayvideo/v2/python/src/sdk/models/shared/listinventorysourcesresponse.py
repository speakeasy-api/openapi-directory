import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventorysource as shared_inventorysource


@dataclass_json
@dataclasses.dataclass
class ListInventorySourcesResponse:
    inventory_sources: Optional[list[shared_inventorysource.InventorySource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySources') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
