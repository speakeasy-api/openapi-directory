import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMartCaseAssociationsResourcePathParams:
    object_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object_category', 'style': 'simple', 'explode': False }})
    taxon: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxon', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMartCaseAssociationsResourceQueryParams:
    slim: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slim', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMartCaseAssociationsResourceRequest:
    path_params: GetMartCaseAssociationsResourcePathParams = dataclasses.field()
    query_params: GetMartCaseAssociationsResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMartCaseAssociationsResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
