import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dealservingmetadatadealpausestatus as shared_dealservingmetadatadealpausestatus


@dataclass_json
@dataclasses.dataclass
class DealServingMetadata:
    alcohol_ads_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alcoholAdsAllowed') }})
    deal_pause_status: Optional[shared_dealservingmetadatadealpausestatus.DealServingMetadataDealPauseStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealPauseStatus') }})
    
