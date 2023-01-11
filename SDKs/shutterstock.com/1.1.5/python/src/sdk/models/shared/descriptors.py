import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bands as shared_bands
from ..shared import instruments as shared_instruments
from ..shared import preview as shared_preview


@dataclass_json
@dataclasses.dataclass
class Descriptors:
    r"""Descriptors
    Information about a descriptor
    """
    
    average_render_speed: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average_render_speed') }})
    bands: Optional[list[shared_bands.Bands]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bands') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instruments: Optional[list[shared_instruments.Instruments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instruments') }})
    max_tempo: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_tempo') }})
    min_tempo: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_tempo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    previews: Optional[list[shared_preview.Preview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previews') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
