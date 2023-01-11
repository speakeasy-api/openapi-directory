import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platform as shared_platform


@dataclass_json
@dataclasses.dataclass
class PlatformParentSingle:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platforms: list[shared_platform.Platform] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    
