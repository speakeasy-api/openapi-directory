import dataclasses
from typing import Optional
from ..shared import reportfilter as shared_reportfilter
from ..shared import commissionstats as shared_commissionstats
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCommissionStatsByFilterRequest:
    request: Optional[shared_reportfilter.ReportFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCommissionStatsByFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commission_stats: Optional[shared_commissionstats.CommissionStats] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
