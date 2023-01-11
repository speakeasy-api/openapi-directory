import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import truncatablestring as shared_truncatablestring


@dataclass_json
@dataclasses.dataclass
class Module:
    r"""Module
    Binary module.
    """
    
    build_id: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildId') }})
    module: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('module') }})
    
