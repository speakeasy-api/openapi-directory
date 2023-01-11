import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layautocomplete as shared_layautocomplete


@dataclass_json
@dataclasses.dataclass
class LayResults:
    results: Optional[list[shared_layautocomplete.LayAutocomplete]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
