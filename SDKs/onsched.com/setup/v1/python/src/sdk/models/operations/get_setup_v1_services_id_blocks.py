import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1ServicesIDBlocksPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDBlocksQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDBlocksRequest:
    path_params: GetSetupV1ServicesIDBlocksPathParams = dataclasses.field()
    query_params: GetSetupV1ServicesIDBlocksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ServicesIDBlocksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_block_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
