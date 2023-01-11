import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1ResourcesIDBlocksPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDBlocksQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDBlocksRequest:
    path_params: GetSetupV1ResourcesIDBlocksPathParams = dataclasses.field()
    query_params: GetSetupV1ResourcesIDBlocksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDBlocksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
