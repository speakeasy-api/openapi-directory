import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1LocationsIDServicesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1LocationsIDServicesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1LocationsIDServicesRequest:
    path_params: GetSetupV1LocationsIDServicesPathParams = dataclasses.field()
    query_params: GetSetupV1LocationsIDServicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1LocationsIDServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    business_service_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
