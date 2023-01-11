import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import richresultsissue as shared_richresultsissue


@dataclass_json
@dataclasses.dataclass
class Item:
    r"""Item
    A specific rich result found on the page.
    """
    
    issues: Optional[list[shared_richresultsissue.RichResultsIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
