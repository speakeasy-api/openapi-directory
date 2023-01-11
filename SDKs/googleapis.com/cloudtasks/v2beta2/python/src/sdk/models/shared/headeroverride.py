import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import header as shared_header


@dataclass_json
@dataclasses.dataclass
class HeaderOverride:
    r"""HeaderOverride
    Wraps the Header object.
    """
    
    header: Optional[shared_header.Header] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    
