import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddCreativeRequest:
    r"""AddCreativeRequest
    Request message for adding creative to be used in the bidding process for the finalized deal.
    """
    
    creative: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creative') }})
    
