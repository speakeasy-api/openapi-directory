import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1BusinessusersQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1BusinessusersRequest:
    query_params: GetSetupV1BusinessusersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1BusinessusersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    business_user_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
