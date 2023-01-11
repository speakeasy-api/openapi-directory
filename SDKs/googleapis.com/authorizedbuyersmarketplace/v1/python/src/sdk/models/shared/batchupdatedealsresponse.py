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
class BatchUpdateDealsResponse:
    r"""BatchUpdateDealsResponse
    Response message for batch updating deals.
    """
    
    deals: Optional[list[shared_deal.Deal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    
