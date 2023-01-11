import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import responsivitylist as shared_responsivitylist


@dataclasses.dataclass
class GetUserResponsivityPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class GetUserResponsivityPeriodEnum(str, Enum):
    MONTHLY = "monthly"
    WEEKLY = "weekly"


@dataclasses.dataclass
class GetUserResponsivityQueryParams:
    period: Optional[GetUserResponsivityPeriodEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserResponsivitySecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserResponsivityRequest:
    path_params: GetUserResponsivityPathParams = dataclasses.field()
    query_params: GetUserResponsivityQueryParams = dataclasses.field()
    security: GetUserResponsivitySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserResponsivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    responsivity_list: Optional[shared_responsivitylist.ResponsivityList] = dataclasses.field(default=None)
    
