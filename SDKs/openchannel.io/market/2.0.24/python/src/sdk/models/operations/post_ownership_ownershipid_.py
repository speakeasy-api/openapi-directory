import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostOwnershipOwnershipIDPathParams:
    ownership_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOwnershipOwnershipIDQueryParams:
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    expires: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expires', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostOwnershipOwnershipIDRequest:
    path_params: PostOwnershipOwnershipIDPathParams = dataclasses.field()
    query_params: PostOwnershipOwnershipIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostOwnershipOwnershipIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
