import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dealpausestatus as shared_dealpausestatus


@dataclass_json
@dataclasses.dataclass
class DealServingMetadata:
    r"""DealServingMetadata
    Message captures metadata about the serving status of a deal.
    """
    
    deal_pause_status: Optional[shared_dealpausestatus.DealPauseStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealPauseStatus') }})
    
