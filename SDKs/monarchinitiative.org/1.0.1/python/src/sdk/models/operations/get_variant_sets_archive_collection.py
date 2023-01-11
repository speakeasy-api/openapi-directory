import dataclasses
from typing import Optional
from ..shared import page_of_variant_sets as shared_page_of_variant_sets


@dataclasses.dataclass
class GetVariantSetsArchiveCollectionPathParams:
    day: int = dataclasses.field(metadata={'path_param': { 'field_name': 'day', 'style': 'simple', 'explode': False }})
    month: int = dataclasses.field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVariantSetsArchiveCollectionQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVariantSetsArchiveCollectionRequest:
    path_params: GetVariantSetsArchiveCollectionPathParams = dataclasses.field()
    query_params: GetVariantSetsArchiveCollectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVariantSetsArchiveCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    page_of_variant_sets: Optional[shared_page_of_variant_sets.PageOfVariantSets] = dataclasses.field(default=None)
    
