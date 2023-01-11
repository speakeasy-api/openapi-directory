import dataclasses
from typing import Optional
from ..shared import powerfeed as shared_powerfeed


@dataclasses.dataclass
class DcimPowerFeedsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerFeedsReadRequest:
    path_params: DcimPowerFeedsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerFeedsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_feed: Optional[shared_powerfeed.PowerFeed] = dataclasses.field(default=None)
    
