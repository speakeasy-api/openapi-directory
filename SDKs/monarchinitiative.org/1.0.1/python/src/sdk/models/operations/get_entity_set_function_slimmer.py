import dataclasses
from typing import Optional
from enum import Enum

class GetEntitySetFunctionSlimmerRelationshipTypeEnum(str, Enum):
    INVOLVED_IN = "involved_in"
    ACTS_UPSTREAM_OF_OR_WITHIN = "acts_upstream_of_or_within"


@dataclasses.dataclass
class GetEntitySetFunctionSlimmerQueryParams:
    slim: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'slim', 'style': 'form', 'explode': True }})
    subject: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    exclude_automatic_assertions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_automatic_assertions', 'style': 'form', 'explode': True }})
    relationship_type: Optional[GetEntitySetFunctionSlimmerRelationshipTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relationship_type', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntitySetFunctionSlimmerRequest:
    query_params: GetEntitySetFunctionSlimmerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitySetFunctionSlimmerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
