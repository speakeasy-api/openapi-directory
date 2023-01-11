import dataclasses
from typing import Optional
from enum import Enum

class FindTheRelativesOfAnEntityRelationEnum(str, Enum):
    PARENT = "parent"
    CHILD = "child"
    SIBLING = "sibling"
    PEER = "peer"


@dataclasses.dataclass
class FindTheRelativesOfAnEntityPathParams:
    relation: FindTheRelativesOfAnEntityRelationEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'relation', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindTheRelativesOfAnEntityQueryParams:
    entity_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variable_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'variable_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindTheRelativesOfAnEntityHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindTheRelativesOfAnEntityRequest:
    headers: FindTheRelativesOfAnEntityHeaders = dataclasses.field()
    path_params: FindTheRelativesOfAnEntityPathParams = dataclasses.field()
    query_params: FindTheRelativesOfAnEntityQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FindTheRelativesOfAnEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
