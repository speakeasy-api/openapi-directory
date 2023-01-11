import dataclasses
from ..shared import variant_set as shared_variant_set


@dataclasses.dataclass
class PostVariantSetsCollectionRequest:
    request: shared_variant_set.VariantSet = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostVariantSetsCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
