import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4RawIndices:
    r"""GoogleSecuritySafebrowsingV4RawIndices
    A set of raw indices to remove from a local list.
    """
    
    indices: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indices') }})
    
