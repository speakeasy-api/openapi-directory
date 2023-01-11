import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatedealrequest as shared_updatedealrequest


@dataclass_json
@dataclasses.dataclass
class BatchUpdateDealsRequestInput:
    r"""BatchUpdateDealsRequestInput
    Request message for batch updating deals.
    """
    
    requests: Optional[list[shared_updatedealrequest.UpdateDealRequestInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
