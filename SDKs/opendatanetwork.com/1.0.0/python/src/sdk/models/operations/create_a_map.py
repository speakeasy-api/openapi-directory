import dataclasses
from typing import Optional


@dataclasses.dataclass
class CreateAMapQueryParams:
    entity_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    variable: str = dataclasses.field(metadata={'query_param': { 'field_name': 'variable', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    constraint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'constraint', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateAMapHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAMapRequest:
    headers: CreateAMapHeaders = dataclasses.field()
    query_params: CreateAMapQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateAMapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
