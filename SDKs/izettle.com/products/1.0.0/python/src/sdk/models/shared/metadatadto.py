import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcedto as shared_sourcedto


@dataclass_json
@dataclasses.dataclass
class MetadataDto:
    in_pos: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inPos') }})
    source: Optional[shared_sourcedto.SourceDto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
