import dataclasses
from typing import Optional
from ..shared import apiclassifiertaxonomyout as shared_apiclassifiertaxonomyout


@dataclasses.dataclass
class TaxonomyClassesPathParams:
    classifier_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'classifierName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaxonomyClassesRequest:
    path_params: TaxonomyClassesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TaxonomyClassesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_classifier_taxonomy_out: Optional[shared_apiclassifiertaxonomyout.APIClassifierTaxonomyOut] = dataclasses.field(default=None)
    
