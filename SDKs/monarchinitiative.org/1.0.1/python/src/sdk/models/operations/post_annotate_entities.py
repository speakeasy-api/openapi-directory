import dataclasses
from typing import Optional
from ..shared import entityannotationresult as shared_entityannotationresult


@dataclasses.dataclass
class PostAnnotateEntitiesQueryParams:
    content: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    exclude_category: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_category', 'style': 'form', 'explode': True }})
    include_abbreviation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_abbreviation', 'style': 'form', 'explode': True }})
    include_acronym: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_acronym', 'style': 'form', 'explode': True }})
    include_category: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_category', 'style': 'form', 'explode': True }})
    include_numbers: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_numbers', 'style': 'form', 'explode': True }})
    longest_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longest_only', 'style': 'form', 'explode': True }})
    min_length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_length', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAnnotateEntitiesRequest:
    query_params: PostAnnotateEntitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAnnotateEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entity_annotation_result: Optional[shared_entityannotationresult.EntityAnnotationResult] = dataclasses.field(default=None)
    
