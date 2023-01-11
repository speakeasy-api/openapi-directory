import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deal as shared_deal


@dataclass_json
@dataclasses.dataclass
class UpdateDealRequestInput:
    r"""UpdateDealRequestInput
    Request message for updating the deal at the given revision number.
    """
    
    deal: Optional[shared_deal.DealInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
