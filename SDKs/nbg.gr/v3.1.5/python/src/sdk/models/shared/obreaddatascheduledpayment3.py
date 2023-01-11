import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obscheduledpayment3 as shared_obscheduledpayment3


@dataclass_json
@dataclasses.dataclass
class ObReadDataScheduledPayment3:
    scheduled_payment: Optional[list[shared_obscheduledpayment3.ObScheduledPayment3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledPayment') }})
    
