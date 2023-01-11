import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedate as shared_googletypedate


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1CustomPeriod:
    r"""GoogleCloudBillingBudgetsV1beta1CustomPeriod
    All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).
    """
    
    end_date: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    start_date: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
