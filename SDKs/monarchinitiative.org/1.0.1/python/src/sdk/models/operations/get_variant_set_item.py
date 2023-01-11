import dataclasses
from typing import Optional
from ..shared import variant_set as shared_variant_set


@dataclasses.dataclass
class GetVariantSetItemPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVariantSetItemRequest:
    path_params: GetVariantSetItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVariantSetItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    variant_set: Optional[shared_variant_set.VariantSet] = dataclasses.field(default=None)
    
