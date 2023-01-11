import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOverRepresentationQueryParams:
    background: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    max_p_value: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_p_value', 'style': 'form', 'explode': True }})
    object_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_category', 'style': 'form', 'explode': True }})
    ontology: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ontology', 'style': 'form', 'explode': True }})
    subject: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    subject_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject_category', 'style': 'form', 'explode': True }})
    taxon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taxon', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOverRepresentationRequest:
    query_params: GetOverRepresentationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOverRepresentationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
