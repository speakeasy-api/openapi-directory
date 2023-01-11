import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IntentFilter:
    r"""IntentFilter
    The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
    """
    
    action_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionNames') }})
    category_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryNames') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
