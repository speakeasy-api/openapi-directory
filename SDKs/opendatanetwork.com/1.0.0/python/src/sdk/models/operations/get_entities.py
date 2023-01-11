import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetEntitiesQueryParams:
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    entity_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity_name', 'style': 'form', 'explode': True }})
    entity_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntitiesHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntitiesRequest:
    headers: GetEntitiesHeaders = dataclasses.field()
    query_params: GetEntitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
