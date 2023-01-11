import dataclasses
from typing import Optional
from ..shared import page_of_variant_sets as shared_page_of_variant_sets


@dataclasses.dataclass
class GetVariantSetsCollectionQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVariantSetsCollectionRequest:
    query_params: GetVariantSetsCollectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVariantSetsCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    page_of_variant_sets: Optional[shared_page_of_variant_sets.PageOfVariantSets] = dataclasses.field(default=None)
    
