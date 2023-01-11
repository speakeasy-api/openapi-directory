import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import responsivitylist as shared_responsivitylist

class GetResponsivityPeriodEnum(str, Enum):
    MONTHLY = "monthly"
    WEEKLY = "weekly"


@dataclasses.dataclass
class GetResponsivityQueryParams:
    period: Optional[GetResponsivityPeriodEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResponsivityRequest:
    query_params: GetResponsivityQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResponsivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    responsivity_list: Optional[shared_responsivitylist.ResponsivityList] = dataclasses.field(default=None)
    
