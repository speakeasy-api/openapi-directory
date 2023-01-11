import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMartGeneAssociationsResourcePathParams:
    object_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object_category', 'style': 'simple', 'explode': False }})
    taxon: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxon', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMartGeneAssociationsResourceQueryParams:
    slim: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slim', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMartGeneAssociationsResourceRequest:
    path_params: GetMartGeneAssociationsResourcePathParams = dataclasses.field()
    query_params: GetMartGeneAssociationsResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMartGeneAssociationsResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
