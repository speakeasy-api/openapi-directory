import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablepowerfeed as shared_writablepowerfeed
from ..shared import powerfeed as shared_powerfeed


@dataclasses.dataclass
class DcimPowerFeedsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerFeedsPartialUpdateRequest:
    path_params: DcimPowerFeedsPartialUpdatePathParams = dataclasses.field()
    request: shared_writablepowerfeed.WritablePowerFeedInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPowerFeedsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_feed: Optional[shared_powerfeed.PowerFeed] = dataclasses.field(default=None)
    
