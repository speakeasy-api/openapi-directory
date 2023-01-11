import dataclasses
from typing import Optional


@dataclasses.dataclass
class PatchOwnershipOwnershipIDPathParams:
    ownership_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchOwnershipOwnershipIDQueryParams:
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    expires: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expires', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchOwnershipOwnershipIDRequest:
    path_params: PatchOwnershipOwnershipIDPathParams = dataclasses.field()
    query_params: PatchOwnershipOwnershipIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PatchOwnershipOwnershipIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
