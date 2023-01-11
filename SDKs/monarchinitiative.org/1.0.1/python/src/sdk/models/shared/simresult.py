import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simmatch as shared_simmatch
from ..shared import simmetadata as shared_simmetadata
from ..shared import simquery as shared_simquery


@dataclass_json
@dataclasses.dataclass
class SimResult:
    matches: Optional[list[shared_simmatch.SimMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    metadata: Optional[shared_simmetadata.SimMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    query: Optional[shared_simquery.SimQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
