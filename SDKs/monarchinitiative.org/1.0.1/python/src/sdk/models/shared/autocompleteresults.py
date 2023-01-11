import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autocompleteresult as shared_autocompleteresult


@dataclass_json
@dataclasses.dataclass
class AutocompleteResults:
    docs: Optional[list[shared_autocompleteresult.AutocompleteResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docs') }})
    
