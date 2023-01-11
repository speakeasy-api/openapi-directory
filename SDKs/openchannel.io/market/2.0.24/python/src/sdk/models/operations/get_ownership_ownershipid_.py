import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOwnershipOwnershipIDPathParams:
    ownership_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOwnershipOwnershipIDRequest:
    path_params: GetOwnershipOwnershipIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOwnershipOwnershipIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
