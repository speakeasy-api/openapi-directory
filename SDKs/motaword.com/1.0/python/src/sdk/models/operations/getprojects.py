import dataclasses
from typing import Optional
from enum import Enum
from ..shared import listordertype_enum as shared_listordertype_enum
from ..shared import projectstatus_enum as shared_projectstatus_enum
from ..shared import projectlist as shared_projectlist

class GetProjectsOrderByEnum(str, Enum):
    ID = "id"
    STATUS = "status"
    DELIVERY = "delivery"
    PRICE = "price"


@dataclasses.dataclass
class GetProjectsQueryParams:
    order_by: Optional[GetProjectsOrderByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    order_type: Optional[shared_listordertype_enum.ListOrderTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_type', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status_: Optional[list[shared_projectstatus_enum.ProjectStatusEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status[]', 'style': 'form', 'explode': True }})
    with_completed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_completed', 'style': 'form', 'explode': True }})
    with_pending: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_pending', 'style': 'form', 'explode': True }})
    with_started: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_started', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectsRequest:
    query_params: GetProjectsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_list: Optional[shared_projectlist.ProjectList] = dataclasses.field(default=None)
    
