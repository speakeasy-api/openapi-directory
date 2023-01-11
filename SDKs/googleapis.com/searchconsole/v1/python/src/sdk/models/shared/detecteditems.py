import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import item as shared_item


@dataclass_json
@dataclasses.dataclass
class DetectedItems:
    r"""DetectedItems
    Rich Results items grouped by type.
    """
    
    items: Optional[list[shared_item.Item]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    rich_result_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richResultType') }})
    
