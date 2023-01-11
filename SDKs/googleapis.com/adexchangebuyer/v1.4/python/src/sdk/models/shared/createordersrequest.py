import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proposal as shared_proposal


@dataclass_json
@dataclasses.dataclass
class CreateOrdersRequest:
    proposals: Optional[list[shared_proposal.Proposal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposals') }})
    web_property_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyCode') }})
    
