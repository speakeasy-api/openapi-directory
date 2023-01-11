import dataclasses
from ..shared import variant_set as shared_variant_set


@dataclasses.dataclass
class PutVariantSetItemPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutVariantSetItemRequest:
    path_params: PutVariantSetItemPathParams = dataclasses.field()
    request: shared_variant_set.VariantSet = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutVariantSetItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
