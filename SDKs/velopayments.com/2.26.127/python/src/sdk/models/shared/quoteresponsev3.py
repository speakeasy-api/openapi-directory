import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quotefxsummaryv3 as shared_quotefxsummaryv3


@dataclass_json
@dataclasses.dataclass
class QuoteResponseV3:
    fx_summaries: Optional[list[shared_quotefxsummaryv3.QuoteFxSummaryV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    
