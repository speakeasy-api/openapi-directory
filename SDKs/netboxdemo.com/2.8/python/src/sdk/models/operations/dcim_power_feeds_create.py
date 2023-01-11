import dataclasses
from typing import Optional
from ..shared import writablepowerfeed as shared_writablepowerfeed
from ..shared import powerfeed as shared_powerfeed


@dataclasses.dataclass
class DcimPowerFeedsCreateRequest:
    request: shared_writablepowerfeed.WritablePowerFeedInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerFeedsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_feed: Optional[shared_powerfeed.PowerFeed] = dataclasses.field(default=None)
    
