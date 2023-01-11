import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedecimal as shared_googletypedecimal


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1PercentageAdjustment:
    r"""GoogleCloudChannelV1PercentageAdjustment
    An adjustment that applies a flat markup or markdown to an entire bill.
    """
    
    percentage: Optional[shared_googletypedecimal.GoogleTypeDecimal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    
