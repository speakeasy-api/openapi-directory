import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1BusinessusersPermissionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1BusinessusersPermissionsRequest:
    query_params: GetSetupV1BusinessusersPermissionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1BusinessusersPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    business_permission_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
