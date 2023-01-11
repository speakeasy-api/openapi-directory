import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1CalendarsIDServicesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDServicesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDServicesRequest:
    path_params: GetSetupV1CalendarsIDServicesPathParams = dataclasses.field()
    query_params: GetSetupV1CalendarsIDServicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
