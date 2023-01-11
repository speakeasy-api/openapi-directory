import dataclasses
from typing import Optional
from ..shared import reportfilter as shared_reportfilter
from ..shared import commissionlist as shared_commissionlist
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCommissionsByFilterRequest:
    request: Optional[shared_reportfilter.ReportFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCommissionsByFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commission_list: Optional[shared_commissionlist.CommissionList] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
