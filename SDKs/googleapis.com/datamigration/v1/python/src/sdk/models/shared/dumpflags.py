import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dumpflag as shared_dumpflag


@dataclass_json
@dataclasses.dataclass
class DumpFlags:
    r"""DumpFlags
    Dump flags definition.
    """
    
    dump_flags: Optional[list[shared_dumpflag.DumpFlag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpFlags') }})
    
