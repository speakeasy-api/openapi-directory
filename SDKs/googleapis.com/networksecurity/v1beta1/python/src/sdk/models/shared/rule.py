import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destination as shared_destination
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class Rule:
    r"""Rule
    Specification of rules.
    """
    
    destinations: Optional[list[shared_destination.Destination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    sources: Optional[list[shared_source.Source]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
