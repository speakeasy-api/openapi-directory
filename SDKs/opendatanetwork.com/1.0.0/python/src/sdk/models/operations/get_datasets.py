import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDatasetsQueryParams:
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    dataset_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dataset_id', 'style': 'form', 'explode': True }})
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    limit: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDatasetsHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDatasetsRequest:
    headers: GetDatasetsHeaders = dataclasses.field()
    query_params: GetDatasetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDatasetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
