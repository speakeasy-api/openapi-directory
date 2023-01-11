import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import level as shared_level
from ..shared import segment as shared_segment


@dataclass_json
@dataclasses.dataclass
class Classification:
    r"""Classification
    Classification
    """
    
    genre: Optional[shared_level.Level] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genre') }})
    primary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    segment: Optional[shared_segment.Segment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    sub_genre: Optional[shared_level.Level] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subGenre') }})
    sub_type: Optional[shared_level.Level] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    type: Optional[shared_level.Level] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
