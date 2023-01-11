import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1CalendarsQueryParams:
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1CalendarsRequest:
    query_params: GetSetupV1CalendarsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CalendarsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
