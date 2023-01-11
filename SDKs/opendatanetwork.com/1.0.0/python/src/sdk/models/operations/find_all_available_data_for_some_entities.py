import dataclasses
from typing import Optional


@dataclasses.dataclass
class FindAllAvailableDataForSomeEntitiesQueryParams:
    entity_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindAllAvailableDataForSomeEntitiesHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindAllAvailableDataForSomeEntitiesRequest:
    headers: FindAllAvailableDataForSomeEntitiesHeaders = dataclasses.field()
    query_params: FindAllAvailableDataForSomeEntitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FindAllAvailableDataForSomeEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
