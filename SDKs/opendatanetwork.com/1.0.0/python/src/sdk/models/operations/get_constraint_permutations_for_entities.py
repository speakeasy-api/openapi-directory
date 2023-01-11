import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetConstraintPermutationsForEntitiesPathParams:
    variable: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConstraintPermutationsForEntitiesQueryParams:
    constraint: str = dataclasses.field(metadata={'query_param': { 'field_name': 'constraint', 'style': 'form', 'explode': True }})
    entity_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConstraintPermutationsForEntitiesHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConstraintPermutationsForEntitiesRequest:
    headers: GetConstraintPermutationsForEntitiesHeaders = dataclasses.field()
    path_params: GetConstraintPermutationsForEntitiesPathParams = dataclasses.field()
    query_params: GetConstraintPermutationsForEntitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConstraintPermutationsForEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
