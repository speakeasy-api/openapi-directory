import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostOwnershipUninstallOwnershipIDPathParams:
    ownership_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOwnershipUninstallOwnershipIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    cancel_ownership: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cancelOwnership', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostOwnershipUninstallOwnershipIDRequest:
    path_params: PostOwnershipUninstallOwnershipIDPathParams = dataclasses.field()
    query_params: PostOwnershipUninstallOwnershipIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostOwnershipUninstallOwnershipIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
