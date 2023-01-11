import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import icnode as shared_icnode


@dataclass_json
@dataclasses.dataclass
class PairwiseMatch:
    lcs: Optional[shared_icnode.IcNode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lcs') }})
    match: Optional[shared_icnode.IcNode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    reference: Optional[shared_icnode.IcNode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    
