import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proposal as shared_proposal


@dataclass_json
@dataclasses.dataclass
class CreateOrdersResponse:
    proposals: Optional[list[shared_proposal.Proposal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposals') }})
    
