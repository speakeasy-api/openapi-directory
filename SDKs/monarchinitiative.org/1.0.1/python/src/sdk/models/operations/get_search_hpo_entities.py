import dataclasses
from typing import Optional
from ..shared import layresults as shared_layresults


@dataclasses.dataclass
class GetSearchHpoEntitiesPathParams:
    term: str = dataclasses.field(metadata={'path_param': { 'field_name': 'term', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchHpoEntitiesQueryParams:
    anatomical_system: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'anatomical_system', 'style': 'form', 'explode': True }})
    anatomical_system_label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'anatomical_system_label', 'style': 'form', 'explode': True }})
    highlight_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'highlight_class', 'style': 'form', 'explode': True }})
    phenotype_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phenotype_group', 'style': 'form', 'explode': True }})
    phenotype_group_label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phenotype_group_label', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchHpoEntitiesRequest:
    path_params: GetSearchHpoEntitiesPathParams = dataclasses.field()
    query_params: GetSearchHpoEntitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchHpoEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lay_results: Optional[shared_layresults.LayResults] = dataclasses.field(default=None)
    
