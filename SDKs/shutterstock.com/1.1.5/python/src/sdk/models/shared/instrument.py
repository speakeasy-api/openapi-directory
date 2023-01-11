import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preview as shared_preview


@dataclass_json
@dataclasses.dataclass
class Instrument:
    r"""Instrument
    Information about an musical instrument
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    previews: Optional[list[shared_preview.Preview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previews') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
