import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1CalendarsIDBlocksPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDBlocksQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDBlocksRequest:
    path_params: GetSetupV1CalendarsIDBlocksPathParams = dataclasses.field()
    query_params: GetSetupV1CalendarsIDBlocksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDBlocksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar_block_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
