import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1LocationsQueryParams:
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1LocationsRequest:
    query_params: GetSetupV1LocationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1LocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
