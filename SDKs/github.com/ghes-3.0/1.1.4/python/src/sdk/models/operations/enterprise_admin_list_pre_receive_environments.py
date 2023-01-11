import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import direction_enum2 as shared_direction_enum2
from ..shared import pre_receive_environment as shared_pre_receive_environment


@dataclasses.dataclass
class EnterpriseAdminListPreReceiveEnvironmentsQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_direction_enum2.DirectionEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveEnvironmentsRequest:
    query_params: EnterpriseAdminListPreReceiveEnvironmentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveEnvironmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_environments: Optional[list[shared_pre_receive_environment.PreReceiveEnvironment]] = dataclasses.field(default=None)
    
