import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import video as shared_video


@dataclass_json
@dataclasses.dataclass
class VideoSearchResults:
    r"""VideoSearchResults
    Video search results
    """
    
    data: list[shared_video.Video] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    search_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_id') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    
