import dataclasses
from typing import Optional
from enum import Enum
from ..shared import salesactivitytype_enum as shared_salesactivitytype_enum
from ..shared import error as shared_error
from ..shared import salesactivities as shared_salesactivities


@dataclasses.dataclass
class GetSalesActivitiesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSalesActivitiesQueryParams:
    exclude_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeOwner', 'style': 'form', 'explode': True }})
    type: Optional[shared_salesactivitytype_enum.SalesActivityTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSalesActivitiesRequest:
    path_params: GetSalesActivitiesPathParams = dataclasses.field()
    query_params: GetSalesActivitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSalesActivitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    sales_activities: Optional[shared_salesactivities.SalesActivities] = dataclasses.field(default=None)
    
