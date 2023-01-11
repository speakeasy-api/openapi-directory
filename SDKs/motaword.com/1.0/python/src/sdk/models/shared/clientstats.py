import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monetary as shared_monetary


@dataclass_json
@dataclasses.dataclass
class ClientStats:
    document_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_count') }})
    nps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nps') }})
    started_project_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_project_count') }})
    total_discounted: Optional[shared_monetary.Monetary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_discounted') }})
    total_project_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_project_count') }})
    total_spending: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_spending') }})
    translator_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translator_count') }})
    
