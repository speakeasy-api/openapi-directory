import dataclasses
from typing import Optional


@dataclasses.dataclass
class PreprintProviderDetailPathParams:
    preprint_provider_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PreprintProviderDetailRequest:
    path_params: PreprintProviderDetailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PreprintProviderDetailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
