import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import editoriallivefeed as shared_editoriallivefeed


@dataclass_json
@dataclasses.dataclass
class EditorialLivefeedList:
    r"""EditorialLivefeedList
    List of editorial livefeeds
    """
    
    data: list[shared_editoriallivefeed.EditorialLivefeed] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    
