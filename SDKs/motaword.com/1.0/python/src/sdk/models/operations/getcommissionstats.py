import dataclasses
from typing import Optional
from ..shared import commissionstats as shared_commissionstats
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCommissionStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commission_stats: Optional[shared_commissionstats.CommissionStats] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
